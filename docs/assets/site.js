/* Advolog — shared site behavior: language toggle (he RTL default / en LTR),
   the "Aa" larger-text toggle (landing-notes accessibility item), copy buttons.
   No theme toggle: the design brief's dark sections are locked, one look for everyone.
   No network requests; localStorage only for the two toggles. */
(function(){
  // ---- Launch wiring (single place to flip at publish) ----
  // REPO_URL: the public GitHub repository URL, set at Phase 6 launch (null = pre-launch).
  // CONTACT_EMAIL: the dedicated bug-report address (Heela's ruling addendum,
  //   2026-08-02): a LIVE Zoho alias on the h2eapps.com contact mailbox; the
  //   mailbox's forward is code-verified and enabled, Zoho keeps a copy.
  //   LAUNCH GATE (narrowed): confirm the one end-to-end test mail landed
  //   before Pages goes live — if delivery breaks, set back to null so the
  //   honest placeholder tag returns.
  // COFFEE_URL: quiet footer support link; null keeps the line hidden until confirmed.
  window.ADV = { REPO_URL: "https://github.com/heelago/Advolog", CONTACT_EMAIL: "advolog@h2eapps.com", COFFEE_URL: "https://buymeacoffee.com/h2eapps" };

  var doc = document.documentElement;

  var qs = new URLSearchParams(location.search);
  var lang = qs.get("lang") || null;
  try { lang = lang || localStorage.getItem("adv-lang"); } catch(e){}
  if (lang !== "en") lang = "he";
  setLang(lang);

  var scale = null;
  try { scale = localStorage.getItem("adv-scale"); } catch(e){}
  if (scale === "big") doc.setAttribute("data-scale","big");

  function setLang(l){
    doc.setAttribute("data-lang", l);
    doc.setAttribute("lang", l);
    doc.setAttribute("dir", l === "he" ? "rtl" : "ltr");
    try { localStorage.setItem("adv-lang", l); } catch(e){}
    var b = document.getElementById("langBtn");
    if (b){
      b.textContent = l === "he" ? "English" : "עברית";
      b.setAttribute("aria-label", l === "he" ? "Switch to English" : "מעבר לעברית");
    }
    // translate control aria-labels (nav, text-size, file inputs) on language change
    document.querySelectorAll("[data-aria-he]").forEach(function(el){
      el.setAttribute("aria-label", l === "he" ? el.getAttribute("data-aria-he") : el.getAttribute("data-aria-en"));
    });
    if (document.body) syncTitle(l);
  }
  function syncTitle(l){
    var t = document.querySelector("title");
    if (t && t.getAttribute("data-he") && t.getAttribute("data-en"))
      t.textContent = l === "he" ? t.getAttribute("data-he") : t.getAttribute("data-en");
  }

  window.addEventListener("DOMContentLoaded", function(){
    // re-run setLang now that the DOM exists, so the toggle button gets its
    // label/aria-label (the initial call ran in <head>, before the button existed)
    setLang(doc.getAttribute("data-lang"));
    syncTitle(doc.getAttribute("data-lang"));

    var lb = document.getElementById("langBtn");
    if (lb) lb.addEventListener("click", function(){
      setLang(doc.getAttribute("data-lang") === "he" ? "en" : "he");
    });

    var sb = document.getElementById("scaleBtn");
    if (sb){
      syncScale();
      sb.addEventListener("click", function(){
        var big = doc.getAttribute("data-scale") === "big";
        if (big) doc.removeAttribute("data-scale"); else doc.setAttribute("data-scale","big");
        try { localStorage.setItem("adv-scale", big ? "normal" : "big"); } catch(e){}
        syncScale();
      });
    }
    function syncScale(){
      var big = doc.getAttribute("data-scale") === "big";
      sb.setAttribute("aria-pressed", big ? "true" : "false");
      sb.title = big ? "טקסט רגיל · Regular text" : "טקסט גדול יותר · Larger text";
    }

    document.querySelectorAll("[data-copy]").forEach(function(btn){
      btn.addEventListener("click", function(){
        var src = document.querySelector(btn.getAttribute("data-copy"));
        if (!src) return;
        var text = src.value !== undefined && src.tagName === "TEXTAREA" ? src.value : src.textContent;
        copyText(text, btn);
      });
    });

    // Email routes: real mailto once ADV.CONTACT_EMAIL is set; honest pending tag until then.
    function pendingize(a, heNote, enNote){
      var wrap = document.createElement("span");
      var label = document.createElement("span");
      while (a.firstChild) label.appendChild(a.firstChild);
      var s = document.createElement("span");
      s.className = "tag";
      s.style.marginInlineStart = "6px";
      s.innerHTML = '<span class="he">'+heNote+'</span><span class="en">'+enNote+'</span>';
      wrap.appendChild(label); wrap.appendChild(s);
      a.replaceWith(wrap);
    }
    document.querySelectorAll("[data-mailto]").forEach(function(a){
      if (window.ADV.CONTACT_EMAIL){
        a.href = "mailto:" + window.ADV.CONTACT_EMAIL + "?subject=" + encodeURIComponent(a.getAttribute("data-mailto"));
      } else pendingize(a, "הכתובת מתפרסמת עם ההשקה", "address arrives at launch");
    });
    // GitHub links: pre-launch tag until ADV.REPO_URL is set.
    document.querySelectorAll("[data-repo]").forEach(function(a){
      if (window.ADV.REPO_URL){ a.href = window.ADV.REPO_URL + (a.getAttribute("data-repo") || ""); }
      else pendingize(a, "עולה עם פתיחת המאגר", "arrives when the repo opens");
    });
    // Coffee link: hidden until confirmed.
    document.querySelectorAll("[data-coffee]").forEach(function(a){
      if (window.ADV.COFFEE_URL){ a.href = window.ADV.COFFEE_URL; a.target = "_blank"; a.rel = "noopener"; }
      else (a.closest("p") || a).style.display = "none";
    });
  });

  function copyText(text, btn){
    function done(ok){
      toast(ok);
      if (btn){
        var prev = btn.innerHTML;
        btn.innerHTML = ok
          ? '<span class="he">הועתק</span><span class="en">Copied</span>'
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
  window.advCopy = copyText;

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
