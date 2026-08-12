# 47 · Risk Register

**Phase:** 5 — Govern Value · **Use when:** risk assessment must become an ongoing discipline

## What it does

Turns a one-off risk assessment into a live register with owners, triggers, review dates, and
movement tracking — and prunes it so that it stays short enough to be read. The difference
between a register and a risk assessment is that a register changes.

## Inputs you need

- The risk assessment output ([42](42-risk-and-mitigation.md))
- Existing register, if any, with its history
- The governance forums that will review it and how often they meet
- Current status of previously agreed mitigations

## Prompt

```
You are maintaining the risk register for [PROGRAMME / BUSINESS] as at [DATE].

Produce:

1. LIVE REGISTER
   Table: ID | risk (specific) | category | owner (named role) | probability | impact |
   score | trend since last review (up / down / unchanged) | mitigation status (not
   started / in progress / complete / failed) | residual score after mitigation | next
   review date.
   Order by residual score.

2. MOVEMENT SINCE LAST REVIEW
   - NEW: risks added, and why they emerged now
   - CLOSED: risks retired, with the evidence justifying closure — a risk is not closed
     because it stopped being discussed
   - ESCALATED: risks whose score rose, with the cause
   - DE-ESCALATED: risks whose score fell, with the evidence
   State the total register score and whether the overall risk position is improving.

3. TRIGGERS AND THRESHOLDS
   For each of the top risks: the specific, observable trigger that means it is
   materialising; who watches for it; how often they look; and what happens the moment it
   fires. Triggers must be numeric or binary — a metric crossing a value, a date passing,
   an event occurring.

4. MITIGATION STATUS
   Table: risk | agreed mitigation | owner | due date | status | if late, by how long and
   why | effect on residual score of the delay.
   Overdue mitigations are themselves a risk. Flag any mitigation more than one review
   period late and escalate it explicitly.

5. THE STALE ENTRIES
   Which risks have sat at the same score for several reviews with no mitigation progress?
   Either they are not real risks, or they are being ignored. Force a decision on each:
   act, accept formally, or remove.

6. REGISTER HYGIENE
   - Risks too vague to be actionable — rewrite or remove
   - Duplicates — merge
   - Risks that are actually issues (already happened) — move to the issue log with an
     owner and a resolution plan
   - Risks with no owner — assign or delete
   Keep the active register under 20 entries. A 90-line register is not read, which means
   it manages nothing.

7. TOP 5 THIS PERIOD
   The five risks the governance forum should spend its time on, with a specific question
   or decision required for each. Everything else is noted, not discussed.

8. WHAT IS MISSING
   Given how the plan and the environment have changed since the last review, what risk
   should now be on this register and is not?

Rules:
- Every entry needs a named owner and a next review date.
- Closure requires evidence, not silence.
- Score movement must be justified, not adjusted to show progress.

MATERIAL:
[PASTE CURRENT REGISTER, RISK ASSESSMENT, MITIGATION STATUS, RECENT CHANGES]
```

## Output you should get

An ordered live register under 20 entries, an explicit movement section, numeric triggers,
mitigation status with delays flagged, a stale-entry purge, and five risks for the forum.

## Quality bar

- **Section 5 is what keeps the register honest.** Risks that never move are not being managed.
- **Section 7 makes the register usable in governance.** Without it, the forum reviews the
  whole list and decides nothing.
- **Reject** any register over 20 active lines. Length is inversely related to use.

## Pairs with

- Precede with [42 Risk & Mitigation](42-risk-and-mitigation.md)
- Follow with [50 Governance Model](50-governance-model.md)
- Follow with [48 Early Warning Signals](48-early-warning-signals.md)
