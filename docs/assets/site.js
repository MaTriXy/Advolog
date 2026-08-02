/* CareHub Open — shared site behavior: language toggle (he RTL default / en LTR),
   explicit theme toggle (light default, never OS-auto — ruled), copy buttons.
   No network requests, no storage beyond localStorage for the two toggles. */
(function(){
  // ---- Launch wiring (single place to flip at publish; see boundary notes) ----
  // REPO_URL: set to the public GitHub repository URL at Phase 6 launch (null = pre-launch).
  // CONTACT_EMAIL: the no-GitHub bug-report route. Flagged for Heela's confirmation.
  window.CHO = {
    REPO_URL: null,
    CONTACT_EMAIL: "heelago@gmail.com",
    COFFEE_URL: null  // quiet footer support link; null hides it until confirmed
  };

  var doc = document.documentElement;

  // Language: he (RTL) default; persisted; ?lang=en supported.
  var qs = new URLSearchParams(location.search);
  var lang = qs.get("lang") || null;
  try { lang = lang || localStorage.getItem("cho-lang"); } catch(e){}
  if (lang !== "en") lang = "he";
  setLang(lang);

  // Theme: light default for everyone; dark only by explicit toggle (persisted).
  var theme = null;
  try { theme = localStorage.getItem("cho-theme"); } catch(e){}
  if (theme === "dark") doc.setAttribute("data-theme","dark");

  function setLang(l){
    doc.setAttribute("data-lang", l);
    doc.setAttribute("lang", l);
    doc.setAttribute("dir", l === "he" ? "rtl" : "ltr");
    try { localStorage.setItem("cho-lang", l); } catch(e){}
    var b = document.getElementById("langBtn");
    if (b){
      b.textContent = l === "he" ? "English" : "עברית";
      b.setAttribute("aria-label", l === "he" ? "Switch to English" : "מעבר לעברית");
    }
    document.querySelectorAll("[data-title-he]").forEach(function(el){
      el.textContent = l === "he" ? el.getAttribute("data-title-he") : el.getAttribute("data-title-en");
    });
    if (document.body) syncTitle(l);
  }
  function syncTitle(l){
    var t = document.querySelector("title");
    if (t && t.getAttribute("data-he") && t.getAttribute("data-en"))
      t.textContent = l === "he" ? t.getAttribute("data-he") : t.getAttribute("data-en");
  }

  window.addEventListener("DOMContentLoaded", function(){
    syncTitle(doc.getAttribute("data-lang"));

    var lb = document.getElementById("langBtn");
    if (lb) lb.addEventListener("click", function(){
      setLang(doc.getAttribute("data-lang") === "he" ? "en" : "he");
    });

    var tb = document.getElementById("themeBtn");
    if (tb){
      syncThemeBtn();
      tb.addEventListener("click", function(){
        var dark = doc.getAttribute("data-theme") === "dark";
        if (dark) doc.removeAttribute("data-theme"); else doc.setAttribute("data-theme","dark");
        try { localStorage.setItem("cho-theme", dark ? "light" : "dark"); } catch(e){}
        syncThemeBtn();
      });
    }
    function syncThemeBtn(){
      var dark = doc.getAttribute("data-theme") === "dark";
      tb.setAttribute("aria-pressed", dark ? "true" : "false");
      tb.querySelector(".he").textContent = dark ? "מצב בהיר" : "מצב כהה";
      tb.querySelector(".en").textContent = dark ? "Light mode" : "Dark mode";
    }

    // Copy buttons: [data-copy="#selector"] copies that element's textContent.
    document.querySelectorAll("[data-copy]").forEach(function(btn){
      btn.addEventListener("click", function(){
        var src = document.querySelector(btn.getAttribute("data-copy"));
        if (!src) return;
        var text = src.value !== undefined && src.tagName === "TEXTAREA" ? src.value : src.textContent;
        copyText(text, btn);
      });
    });

    // Email routes
    document.querySelectorAll("[data-mailto]").forEach(function(a){
      a.href = "mailto:" + window.CHO.CONTACT_EMAIL + "?subject=" + encodeURIComponent(a.getAttribute("data-mailto"));
    });
    // GitHub links: pre-launch, replaced by a plain "soon" chip.
    document.querySelectorAll("[data-repo]").forEach(function(a){
      if (window.CHO.REPO_URL){ a.href = window.CHO.REPO_URL + (a.getAttribute("data-repo") || ""); }
      else {
        var s = document.createElement("span");
        s.className = "chip";
        s.innerHTML = '<span class="he">יעלה עם פתיחת המאגר</span><span class="en">arrives when the repo opens</span>';
        a.replaceWith(s);
      }
    });
    // Coffee link: hidden until confirmed.
    document.querySelectorAll("[data-coffee]").forEach(function(a){
      if (window.CHO.COFFEE_URL) a.href = window.CHO.COFFEE_URL;
      else (a.closest("p") || a).style.display = "none";
    });
  });

  function copyText(text, btn){
    function done(ok){
      toast(ok);
      if (btn){
        var prev = btn.innerHTML;
        btn.innerHTML = ok
          ? '<span class="he">הועתק ✓</span><span class="en">Copied ✓</span>'
          : '<span class="he">סמנו והעתיקו ידנית</span><span class="en">Select and copy manually</span>';
        setTimeout(function(){ btn.innerHTML = prev; }, 2200);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){done(true);}, function(){ fallback(); });
    } else fallback();
    function fallback(){
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position="fixed"; ta.style.opacity="0";
      document.body.appendChild(ta); ta.focus(); ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch(e){}
      document.body.removeChild(ta);
      done(ok);
    }
  }
  window.choCopy = copyText;

  var toastTimer;
  function toast(ok){
    var t = document.getElementById("toast");
    if (!t) return;
    var he = ok ? "הועתק ללוח" : "ההעתקה נחסמה — אפשר לסמן ולהעתיק ידנית";
    var en = ok ? "Copied to clipboard" : "Copy blocked — select and copy manually";
    t.textContent = doc.getAttribute("data-lang") === "he" ? he : en;
    t.style.opacity = "1";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.style.opacity = "0"; }, 2400);
  }
})();
