# 50 · Governance Model

**Phase:** 5 — Govern Value · **Use when:** oversight is either absent or suffocating

## What it does

Designs the forums, thresholds, reporting, and escalation paths that give oversight
proportionate to risk — enough control to catch problems, little enough friction to let work
proceed. Bad governance fails in both directions at once: heavy on the routine, absent on the
consequential.

## Inputs you need

- What is being governed: programme, portfolio, business unit, joint venture
- The decisions that must be controlled and their value at stake
- Existing governance and where it currently fails
- Regulatory or shareholder requirements that constrain the design

## Prompt

```
You are designing the governance model for [SCOPE] at [COMPANY].

Proportionality is the principle: control intensity should match value at stake and
irreversibility, not organisational anxiety.

Produce:

1. WHAT NEEDS GOVERNING
   List the decisions, risks, and commitments requiring oversight. For each: value at
   stake, reversibility, frequency, and required speed. Group into control tiers, and be
   explicit that low-tier items are deliberately governed lightly.

2. FORUM DESIGN
   For each forum: purpose | membership (roles) | chair | frequency | quorum | decision
   authority (with thresholds) | standing agenda | inputs required and their deadline |
   outputs.
   Minimise the number of forums. Every additional forum consumes senior time twice, once
   in preparation and once in attendance, and adds a queue to every decision that crosses it.

3. AUTHORITY THRESHOLDS
   Table: decision type | delegated authority | escalates above | next authority | final
   authority.
   Sanity-check the volume: estimate how many decisions per year each threshold sends
   upward. If the top forum receives more than it can consider properly, the threshold is
   wrong.

4. REPORTING
   What each forum receives: content, format, page limit, who prepares it, deadline before
   the meeting. Use a fixed format so that periods are comparable. State the page limit
   explicitly — governance packs expand until they are unread.

5. ESCALATION PATH
   How an issue moves up: trigger, who raises, to whom, in what timeframe, with what
   information. Include the maximum time an issue may remain unresolved at any level before
   automatic escalation. Make escalation blame-free by design and say how.

6. ASSURANCE
   Independent of the delivery line: who checks that reported status is accurate, how often,
   and with what access. Programmes report green until they cannot. State the assurance
   mechanism — audit, independent review, direct sampling of underlying data.

7. INTERVENTION RIGHTS
   What the governing body can actually do when things go wrong: change scope, change
   resource, change owner, pause, stop. State these explicitly, along with the evidence
   required to exercise each. Governance without intervention rights is observation.

8. WHAT WE ARE DELIBERATELY NOT GOVERNING
   The decisions left fully to delegated authority, and why. This section prevents scope
   creep in governance, which otherwise expands until it consumes the work.

9. GOVERNANCE COST
   Total senior hours per month across all forums plus preparation. State it as a number
   and judge whether it is proportionate to the value at stake.

10. FAILURE MODES
    How this design could fail: rubber-stamping, decision paralysis, information filtered
    on the way up, forums that discuss without deciding, escalation treated as failure.
    For each, the structural feature intended to prevent it.

11. HOW THIS MODEL FAILS QUIETLY
    The visible failure of governance is paralysis. The quiet failure is a body that meets,
    reviews, and approves without ever changing an outcome. State how you would tell, twelve
    months in, which of the two this design has produced.

Rules:
- Every forum needs decision authority. Advisory-only forums should be replaced by written
  circulation.
- Thresholds must be checked against volume.
- Governance intensity must be proportionate — say explicitly what is governed lightly.

MATERIAL:
[PASTE SCOPE, DECISION TYPES, CURRENT GOVERNANCE AND ITS FAILURES, REQUIREMENTS]
```

## Output you should get

Tiered control by value and reversibility, minimal forums with real authority,
volume-checked thresholds, an assurance mechanism independent of delivery, explicit
intervention rights, and a stated governance cost in senior hours.

## Quality bar

- **Section 6 is what catches the watermelon report** — green on the outside, red inside.
- **Section 9 makes the cost visible.** Governance consuming 40 senior hours a month on a
  £2m programme is disproportionate; say so.
- **Reject** a design with more than three layers of forum for anything short of a
  multi-year, multi-hundred-million programme.

## Pairs with

- Precede with [30 Decision Rights](../3-choose-strategy/30-decision-rights.md) and [35 Accountability Map](../4-build-execution/35-accountability-map.md)
- Follow with [40 Execution Cadence](../4-build-execution/40-execution-cadence.md)
- Follow with [47 Risk Register](47-risk-register.md)
