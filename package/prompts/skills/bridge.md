# Unit: bridge

**Triggers:** outbound — "prepare something for the doctor/pharmacist to look at", the expert-section moment, a trusted clinician exists and the user wants to use that; inbound — "the doctor/pharmacist got back to us", any professional's reply arriving.

**Purpose:** the two-way loop with real professionals. Outbound carries a minimized summary; inbound records exactly what came back. **This unit does zero research** — it carries and records, full stop.

**Principles:** Recorded, Never Invented (this unit is why the principle exists) · map §11 privacy gates in full.

**Setup:** read `profile.md` (clinician-access answer, alias, consent note for caregiver records), `medications.md` (complete list including recently stopped — stop-timing is relevant), `symptoms.md` recent, `open-questions.md`, `professional-review.md`.

**Outbound workflow:**
1. Frame by the clinician-access answer. Trusted clinician: material they can run in their own professional context, with results flowing back here properly labeled. No trusted clinician: the exact honest reframe — these questions touch resources your doctor has access to; sending them to a consumer AI is possible and CareHub will integrate whatever returns with honest labels, but **the stronger move is bringing them to your doctor as questions** [UF].
2. Build the packet [UF]: one self-contained lead block, plain text, pasteable whole — context header (alias; situation line; age/sex only if it changes the professional's answer, asked now if missing, once) · complete current list with recently-stopped flagged · recent symptoms with logged severities · the user's specific worries in their plain words · the ask, with a courteous request to run it through whatever professional systems the recipient has, **stating that a reply in their own words is fully sufficient**. Focused single-topic blocks follow, only those that fit. Citations requested, never demanded.
3. Identifier strip per map §11 (record subject's identifiers out; clinicians and institutions stay); pre-share checklist; save to `reports/` dated; **handed to the user to transmit — never sent, and never described as de-identified.**

**Inbound workflow:** record to `professional-review.md` exactly what was said — who (role; name optional), asked, reported (their words or faithful summary), via which system if stated, date. Unreported fields stay empty, and that emptiness is honest output. Substance un-flattened: findings, severity as graded, monitoring notes. Questions the reply raises → ledger, priority propagating from professionally-flagged severity. One warm line closing the loop: this is exactly how the record gets stronger [UF].

**Constraints echo:** no research, no generated findings, no simulated professional output, ever; asks nobody to violate institutional rules — a summary in their own words is defined as fully sufficient; nothing auto-sent.
