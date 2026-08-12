# 40 · Execution Cadence

**Phase:** 4 — Build Execution · **Use when:** the plan exists but nothing is moving

## What it does

Designs the meeting and reporting rhythm that makes a plan self-correcting: what is reviewed,
how often, by whom, with what inputs, and — most importantly — what decision each forum is
empowered to make. A cadence where nothing is decided is a status ritual.

## Inputs you need

- The plan, its milestones, and its owners
- Existing meeting structure and what each meeting currently produces
- How long problems typically take to surface today
- Who needs to know what, and how quickly

## Prompt

```
You are designing the execution cadence for [PROGRAMME / BUSINESS] at [COMPANY].

Every forum must have a decision it exists to make. If it exists only to share information,
replace it with a written update.

Produce:

1. CADENCE STRUCTURE
   For each layer, specify: forum | frequency | duration | attendees (roles) | inputs
   required and who provides them | the decisions this forum makes | outputs.
   Typical layers:
   - DAILY/WEEKLY at team level: unblock, reallocate, escalate
   - FORTNIGHTLY/MONTHLY at programme level: progress against milestones, cross-workstream
     dependencies, risk, resource moves
   - MONTHLY/QUARTERLY at executive level: are we still doing the right thing, gate
     decisions, reallocation, stop/continue
   Keep the total number of forums small. Every forum consumes senior time twice — once in
   the room and once in preparation.

2. THE DECISION EACH FORUM MAKES
   For every forum, state the decisions in its authority and the ones that must escalate.
   Then check: is there a forum that makes no decision? Delete it or convert it to a
   written report.

3. STANDARD INPUTS
   For each forum, the standard pack: which metrics, in what format, produced by whom, by
   when before the meeting. Keep it short and fixed — a pack that changes every cycle
   cannot be read comparatively, and a pack of 60 slides will not be read at all.
   Specify: circulated [N] hours in advance, read before the meeting, not presented in it.

4. ESCALATION MECHANICS
   How an issue moves up: the trigger (a threshold, not a feeling), who raises it, to whom,
   how fast, and the maximum time it may sit at each level before automatic escalation.
   State the rule that makes escalation safe rather than career-limiting — escalation is a
   system function, not an admission of failure.

5. TIME TO SURFACE
   For each type of problem — slipping milestone, blown budget, lost key person, benefit
   shortfall, quality failure — how long from occurrence to being visible in this cadence?
   Compare with today. If a slipping milestone takes six weeks to surface, the cadence is
   too slow regardless of how many meetings there are.

6. WHAT WE STOP
   Existing meetings and reports this cadence replaces. Be explicit — new cadences are
   usually added on top of old ones, and the total meeting load is why nobody has time to
   do the work.

7. THE WRITTEN LAYER
   What is communicated in writing rather than in meetings: weekly written status in a
   fixed format, decision log, risk log, and where they live. Written updates scale;
   meetings do not.

8. SELF-CORRECTION TEST
   Walk through a scenario: a milestone slips by three weeks in workstream 3. Trace how it
   surfaces, who sees it, when, what decision follows, who makes it, and how the plan
   adjusts. If the trace breaks anywhere, fix the cadence there.

9. REVIEW OF THE CADENCE
   When and how the cadence itself gets reviewed and pruned. Cadences accumulate.

Rules:
- No forum without a decision right.
- No pack presented in the room that could have been read in advance.
- Total senior time in cadence must be stated as a number of hours per month and sanity-checked.

MATERIAL:
[PASTE PLAN, MILESTONES, OWNERS, CURRENT MEETING STRUCTURE]
```

## Output you should get

A layered cadence where each forum has named decision rights, fixed standard packs, escalation
mechanics with time limits, an explicit stop list, and a traced self-correction scenario.

## Quality bar

- **Section 8 is the test of the whole design.** If a slip cannot be traced from occurrence to
  correction, the cadence does not work.
- **Section 6 must not be empty.** Adding cadence without removing any is how organisations
  end up in meetings all day.
- **Section 5's time-to-surface** is the number that most predicts whether a programme
  recovers from setbacks.

## Pairs with

- Precede with [35 Accountability Map](35-accountability-map.md)
- Follow with [50 Governance Model](../5-govern-value/50-governance-model.md)
- Follow with [45 Performance Review](../5-govern-value/45-performance-review.md)
