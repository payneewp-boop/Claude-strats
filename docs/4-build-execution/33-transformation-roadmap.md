# 33 · Transformation Roadmap

**Phase:** 4 — Build Execution · **Use when:** the change spans years and many workstreams

## What it does

Sequences the work across horizons with dependencies made honest, early proof points placed
deliberately, and the funding profile shown. A roadmap's job is to make the order of work
arguable — which is the only way to find out it is wrong before you live it.

## Inputs you need

- The prioritised initiative set ([32](32-initiative-prioritizer.md))
- Dependencies: technical, organisational, contractual, regulatory
- Capability and capacity constraints by period
- Funding profile and any hard external dates

## Prompt

```
You are building the transformation roadmap for [PROGRAMME] at [COMPANY], covering
[HORIZON].

Produce:

1. HORIZON STRUCTURE
   Define three horizons with explicit boundaries and a purpose for each:
   - H1 [PERIOD]: stabilise and prove — deliver early wins, build credibility, fix what
     blocks everything else
   - H2 [PERIOD]: build and scale — the substantive change
   - H3 [PERIOD]: extend — what the earlier horizons make possible
   State the goal, the success test, and the exit criteria for each horizon.

2. WORKSTREAMS
   Group the initiatives into 4–7 workstreams, each with a single accountable owner and a
   clear outcome. More than seven and nobody can hold the programme in their head.
   For each: outcome, owner, initiatives inside it, and its dependency on other workstreams.

3. SEQUENCED PLAN
   A period-by-period view (quarters usually). For each period, per workstream: what starts,
   what completes, what milestone is hit.
   Sequence by: what unblocks the most other work, what proves the concept earliest, what
   has the longest lead time, and what must be ready before an external date.

4. DEPENDENCY MAP
   Table: dependent item | depends on | type (technical / organisational / contractual /
   regulatory / capability) | lead time | what happens if the prerequisite slips | slack
   available.
   Identify the critical path explicitly and state its total length. Then name the three
   dependencies most likely to slip, and why.

5. EARLY PROOF POINTS
   What visible result lands in the first 90 days, and in the first 180? These fund the
   programme politically. Each must be genuinely visible to people outside the programme
   team, and genuinely attributable to it.

6. FUNDING AND RESOURCE PROFILE
   By period: spend, headcount, and the peak. State when the programme is most exposed —
   maximum spend before benefits arrive — and what the cumulative cash position looks like
   at that point.

7. DECISION GATES
   Between horizons and at major commitments: the gate, the evidence required to pass it,
   who decides, and the pre-agreed options at each gate — proceed, adjust, pause, stop.
   A roadmap with no stop gates is a commitment, not a plan.

8. WHAT MAKES THIS PLAN SLIP
   The three most likely causes of delay, based on the dependency map and this
   organisation's history. For each: the early signal and the mitigation already built in.

9. THE COMPRESSED VERSION
   If the timeline had to be cut by a third, what would you drop or parallelise, and what
   risk would that add? Leadership always asks; answer it in advance.

10. THE SEQUENCE MOST LIKELY TO BE WRONG
   Argue against your own ordering: which workstream have you scheduled late that a sceptic
   would start immediately, and which early item is consuming capacity before it is needed?
   State the dependency you are least confident actually exists.

Rules:
- Do not show work starting in every workstream simultaneously in period one. That is a
  wish, not a sequence.
- Every dependency needs a lead time. Dependencies without lead times hide the critical path.
- Include the business-as-usual load on the same people. Roadmaps that assume full-time
  programme attention from part-time contributors always slip.

MATERIAL:
[PASTE INITIATIVES, DEPENDENCIES, CONSTRAINTS, FUNDING PROFILE, EXTERNAL DATES]
```

## Output you should get

Three horizons with exit criteria, 4–7 owned workstreams, a period-by-period sequence, an
explicit critical path, dated proof points, funding peak, and stop gates.

## Quality bar

- **Section 5 determines whether the programme survives its first year.** No visible result
  in 90 days means the programme is politically undefended when the first setback arrives.
- **Section 6's exposure point is what the CFO will ask about.** Have it ready.
- **Reject** a roadmap whose gates have no "stop" option.

## Pairs with

- Precede with [32 Initiative Prioritizer](32-initiative-prioritizer.md)
- Follow with [34 Milestone Plan](34-milestone-plan.md)
- Follow with [40 Execution Cadence](40-execution-cadence.md)
