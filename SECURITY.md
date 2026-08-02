# Security policy

## Reporting a vulnerability

Please report security issues **privately**, not in a public issue.

**Email: advolog@h2eapps.com** — put "SECURITY" in the subject. Include what you found, where
(file and, if it helps, a minimal reproduction), and the impact you see. We'll acknowledge and
work with you on a fix and disclosure timing.

**Do not include real medical data, real names, ID numbers, or any real personal information in
a report.** An invented example is always enough to demonstrate an issue — and this project
exists to protect exactly that kind of data, so please don't send it to us either.

## Scope, in plain terms

Advolog is a set of instruction files plus small, self-contained local tools (a browser
dashboard and an image censor). There is no server and no backend to attack on our side. The
security surface worth reporting:

- The local **dashboard** (`package/dashboard.html`) holds read/write access to a user's record
  folder. Anything that could make it run untrusted content as code, write to the wrong place,
  apply updates incorrectly, or leak the folder off-device is in scope.
- The **image censor** and **text scrub** are privacy tools. Anything that could cause a
  redaction to be reversible, or an identifier to escape the scrub in a way a user would
  reasonably expect it not to, is in scope — noting the tools state their own honest limits
  (they cover what you mark; a final human review is always the real protection).
- The **prompts** enforce safety walls (no diagnosis, no treatment advice, no invented
  citations, tiered evidence, crisis handling). A reproducible way to make the shipped prompts
  break a wall is a safety issue we want to hear about — the bug-report route on the site also
  handles these.

## What is intentionally not a vulnerability

- The conversations and files a user uploads to Claude or ChatGPT are retained under that
  provider's policy. That is disclosed in the privacy copy and the setup guides; it is a
  property of the platform, not an Advolog defect.
- The tools make no network requests by design; a user choosing to share or upload something is
  the user transmitting, which the design states plainly.
