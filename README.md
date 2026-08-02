# CareHub Open <sub>(שם עבודה — שם ציבורי ייבחר לפני הפרסום)</sub>

חבילה פתוחה וחינמית שעוזרת למטופלות, למטופלים ולמלווים לעמוד על שלהם במפגש עם המערכת הרפואית: להפוך חודשים של ניסיון חי, מסמכים מפוזרים ותורים חצי־זכורים לחומר מסודר ואמין שרופאים קוראים ברצינות — ציר זמן, שאלות עם נימוק, סיכומי תרופות ותסמינים, ודפי הכנה לתור.

**מה זה לא:** לא כלי אבחון, לא יועץ טיפולי, לא שירות חירום, ולא תחליף לשיקול דעת קליני. כל תוצר מנוסח כשאלות והקשר לצוות המטפל — אף פעם לא כמסקנות. בלי חשבונות, בלי שרת, בלי איסוף נתונים: הכול רץ בחשבון ה־AI של המשתמש/ת ובמחשב שלו/ה.

## שני מסלולי התקנה, שווי מעמד

1. **החבילה המלאה** — תיקיית `package/`: מפת הנחיות אחת, חמש־עשרה יחידות מיומנות, שכבה עברית־ישראלית, ולוח מקומי (`dashboard.html`) שמציג את הרשומות ומכניס עדכונים רק באישור. מתאימה לפרויקט ב־Claude או ב־ChatGPT.
2. **מסלול אפס־הורדות** — פרומפט פתיחה אחד, מוכן להעתקה, שמריץ את הריאיון ומקים גרסה קלה בלי אף קובץ: `package/starter/starter-prompt.md`. מי שלא רוצה להוריד כלום — זה מסלול מלא, לא פשרה.

מדריכי התקנה לכל פלטפורמה, כולל הליכי הפרטיות, באתר וב־`package/setup/`.

## חמשת המסלולים

מסע אבחון · ניהול מתמשך · מצב קליטה · מלווה · הכנה מהירה. ריאיון הפתיחה מנתב, בעדינות, שאלה אחת בכל פעם — ואפשר להחזיק יותר ממסלול אחד.

## העקרונות שלא מתגמשים

- שאלות, לעולם לא עצות: שום אבחנה, שום המלצה טיפולית, שום מינון.
- רובדי ראיות מסומנים תמיד, לעולם לא מעורבבים: **מקורות רשמיים · פרסומים מדעיים · דיווחי מטופלים**.
- שום ציטוט מומצא: מקור שאי אפשר לאמת — מושמט, בקול.
- ברגעי מצוקה: משאבים אמיתיים (חירום 101 · ער"ן 1201 · סה"ר), בלי שיטות, בלי בהלה.
- המשתמש/ת בשליטה: מה נשמר, מה משותף, ועם מי — תמיד החלטה שלהם, והכלי לעולם לא שולח דבר בעצמו.

הצעת הליך הפרטיות מגיעה כבר בהתקנה (כולל ביטול שימוש בשיחות לאימון המודל, לפי הפלטפורמה — אם האפשרות פעילה בחשבון), וחוזרת פעם אחת לפני הייצוא הראשון.

## מה נבדק ומה עדיין לא

טבלת התמיכה המלאה, עם תאריכים: [`package/setup/support-matrix.md`](package/setup/support-matrix.md). בקצרה: המסלול המרכזי נבדק בריצות חיות בצד Claude; בצד GPT נבדק בהרצת הדמיה מקומית מלאה; הלוח נבדק בכרום. פערים פתוחים רשומים שם במפורש.

## דיווח על תקלה

תבניות דיווח מוכנות ב־`.github/ISSUE_TEMPLATE/` (יופעלו עם פתיחת המאגר). בלי חשבון GitHub — דוא"ל, הכתובת באתר. בכל דיווח: בלי פרטים אישיים ובלי תוכן רפואי אמיתי — תיאור התקלה מספיק.

## רישיון

MIT (קובץ `LICENSE`). **הבהרה בריאותית:** הפרויקט אינו ייעוץ רפואי, אינו מאבחן, אינו ממליץ על טיפול ואינו מחליף רופא/ה או שיקול דעת קליני; הוא עוזר לארגן מידע ולנסח שאלות לצוות המטפל. אין התחייבות לדיוק רפואי.

תרומות קוד ותוכן: ראו [`CONTRIBUTING.md`](CONTRIBUTING.md) — עמודי הבטיחות אינם פתוחים למשא ומתן.

---

# CareHub Open <sub>(working name — a public name lands before release)</sub>

An open, free package that helps patients and caregivers advocate for themselves in medical interactions: turning months of lived experience and scattered records into structured, credible, doctor-readable material — timelines, question lists with stated reasoning, medication and symptom summaries, and appointment prep sheets.

**What it is not:** not a diagnostic tool, not a treatment advisor, not a crisis service, not a replacement for clinical judgment. Every output is questions and context for the care team, never conclusions. No accounts, no server, no analytics: everything runs in the user's own AI account and on their own machine.

## Two install paths, equal standing

1. **The full package** — the `package/` folder: one instruction map, fifteen skill units, a Hebrew-Israeli layer, and a local dashboard (`dashboard.html`) that shows the records and applies updates only on approval. Fits a Claude or ChatGPT project.
2. **The zero-download path** — a single copy-paste starter prompt that runs the interview and bootstraps a light version with no files at all: `package/starter/starter-prompt.md`. A full path, not a fallback.

Per-platform setup guides, including the privacy walkthroughs, live on the site and in `package/setup/`.

## The five paths

Diagnostic journey · Ongoing management · Capture mode · Caregiver · Express prep. The onboarding interview routes gently, one question at a time — and more than one path can be active.

## The principles that do not bend

- Questions, never advice: no diagnosis, no treatment recommendations, no dosing.
- Evidence tiers always labeled, never blended: **Official sources · Scientific publications · Patient reports**.
- No invented citations: an unverifiable source is dropped, out loud.
- In moments of distress: real resources (in Israel: emergency 101 · ERAN 1201 · Sahar), no methods, no alarm.
- The user is in control: what is kept, what is shared, and with whom — always their decision, and the tool never transmits anything itself.

The privacy walkthrough is offered at install (including the model-training opt-out, per platform — where the option is active on the account) and repeats once before the first export.

## What is tested and what is not yet

The full, dated support matrix: [`package/setup/support-matrix.md`](package/setup/support-matrix.md). In short: the core path had live runs on the Claude side; the GPT side had a full local harness run; the dashboard is verified in Chrome. Open gaps are stated there explicitly.

## Reporting a problem

Issue templates are ready in `.github/ISSUE_TEMPLATE/` (activated when the repository opens). Without a GitHub account — email; the address is on the site. Either way: no personal details and no real medical content — describing the problem is enough.

## License

MIT (see `LICENSE`). **Health disclaimer:** this project is not medical advice, does not diagnose, does not recommend treatment, and does not replace clinicians or clinical judgment; it helps organize information and phrase questions for the care team. No warranty of medical accuracy.

Contributions: see [`CONTRIBUTING.md`](CONTRIBUTING.md) — the safety walls are not negotiable.
