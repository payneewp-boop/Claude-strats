# 09 · Evidence Plan

**Phase:** 1 — Diagnose · **Use when:** you know what you don't know and must go find out

## What it does

Turns a list of open questions into a resourced research plan: what evidence to gather, from
where, by whom, by when, at what cost, and — critically — what decision each piece of
evidence would change. Evidence that changes no decision does not get gathered.

## Inputs you need

- The open questions (ideally from [06 Issues List](06-issues-list.md) or the gaps section of
  [01 Situation Assessment](01-situation-assessment.md))
- Your deadline and budget
- What data you can access internally, and what would require external help
- Who is available to do the work, and for how many hours a week

## Prompt

```
You are building the evidence plan for [PROJECT / DECISION]. The plan must fit inside
[TIMEFRAME] and [BUDGET / TEAM CAPACITY].

Produce:

1. EVIDENCE REGISTER
   Table: # | question it answers | evidence required (be specific — not "customer data"
   but "win/loss reasons for the 40 deals over £100k lost in the last 4 quarters") |
   source | method (internal extract / interview / survey / expert call / desk research /
   field observation / purchased report) | effort (person-days) | cost | lead time |
   confidence the method will actually produce the answer.

2. DECISION LINKAGE
   For every row, state the decision that changes depending on the answer, and how. If a
   row's honest answer is "this would be interesting but would not change what we do,"
   mark it CUT. Show the cut rows so the team can see what was deliberately excluded.

3. SEQUENCING
   Order the work into waves.
   - Wave 1: cheap, fast, high-decision-impact. Things that could end the study early.
   - Wave 2: the substantive work, informed by wave 1.
   - Wave 3: confirmatory or deep-dive, only if waves 1–2 leave the decision open.
   For each wave: what it costs, how long, and what decision gate sits at its end.

4. KILL CRITERIA
   State the findings from wave 1 that would stop the project entirely or redirect it.
   Write them as specific thresholds: "if fewer than 30% of lost deals cite feature gaps,
   the product investment case is dead and we redirect to channel."

5. ACCESS PLAN
   For each external source: who to approach, what to ask for, what you can offer in
   return, and the fallback if access is refused. For internal data: who owns the system,
   what the request needs to say, and typical turnaround.

6. WHAT WE WILL STILL NOT KNOW
   Even after the full plan executes, name what remains unknown, and how the decision
   should be structured to be robust to that residual uncertainty.

7. TOTALS
   Total effort in person-days, total cost, elapsed time, and whether that fits the stated
   constraint. If it does not fit, show what a version that does fit looks like and state
   plainly what confidence is lost by cutting to it.

Rules:
- Every row must have a named source. "Market research" is not a source; a named report,
  database, or set of people is.
- Prefer evidence that could disprove the leading hypothesis over evidence that could
  confirm it.
- Assume access will be slower than hoped and build that into lead times.

OPEN QUESTIONS:
[PASTE QUESTIONS, CONSTRAINTS, AVAILABLE DATA AND PEOPLE]
```

## Output you should get

A costed register with decision linkage, three waves with gates, explicit kill criteria, and
a total that either fits your constraint or shows the trade-off of making it fit.

## Quality bar

- **Section 2 is the discipline.** A plan where nothing is marked CUT has not been prioritised.
- **Kill criteria must be numeric.** "If the market looks unattractive" is not a criterion.
- **Check the totals against reality.** Evidence plans habitually underestimate access lead
  times by a factor of two; if the plan has no slack, it will slip.

## Pairs with

- Precede with [06 Issues List](06-issues-list.md)
- Follow with [10 Test Plan](10-test-plan.md) where the evidence needs an experiment, not a lookup
- Follow with [34 Milestone Plan](../4-build-execution/34-milestone-plan.md) to schedule the waves
