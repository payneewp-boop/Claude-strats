# 43 · KPI Architect

**Phase:** 5 — Govern Value · **Use when:** you have 60 metrics and no idea which matter

## What it does

Builds a metric tree from the strategic outcome down to the operational activities that drive
it, selects the smallest set that gives real control, and stress-tests each metric for how it
will be gamed. Metrics change behaviour whether or not they measure anything useful — this
tool makes that deliberate.

## Inputs you need

- The strategic outcome the metrics must serve
- Current metric set and what is actually reported and discussed
- Data availability: what can be measured reliably, from which system, at what frequency
- How people are currently incentivised

## Prompt

```
You are designing the KPI architecture for [STRATEGY / BUSINESS UNIT] at [COMPANY].

Produce:

1. THE OUTCOME METRIC
   The single number that says whether the strategy is working. One metric. State its
   definition precisely, its current value, its target, and by when.
   If the organisation cannot agree on one, that disagreement is the finding — surface it.

2. METRIC TREE
   Decompose the outcome metric into its arithmetic drivers, and those into theirs, until
   you reach metrics that a team can directly influence through daily work.
   Render as an indented tree, and show the relationship at each level — the drivers must
   actually combine into the parent, not merely relate to it thematically.
   Example: EBIT → gross margin × volume − fixed costs → (price − unit cost) × units → ...

3. KPI SELECTION
   From the tree, select 5–9 KPIs total for regular management attention. For each:
   - NAME AND DEFINITION: precise enough that two people compute the same number
   - LEVEL: outcome, driver, or operational
   - OWNER: one named role
   - SOURCE: named system or report
   - FREQUENCY: how often it is meaningful to look at it (not how often it could be produced)
   - CURRENT, TARGET, AND THRESHOLD: green/amber/red boundaries with a rationale
   - LAG: how long between action and the metric moving

4. LEADING AND LAGGING BALANCE
   Mark each KPI leading or lagging. A set that is all lagging tells you the result after it
   is too late to change it; a set that is all leading tells you about activity without
   confirming outcome. State the balance and fix it if it is skewed.

5. GAMING ANALYSIS
   For each KPI: how would a rational person under pressure improve this number without
   improving the underlying reality? Then state the counter-metric or guardrail that
   prevents it.
   Every metric gets this treatment. Examples: cost per unit improved by cutting quality;
   NPS improved by surveying selectively; pipeline improved by adding unqualified leads;
   cycle time improved by rejecting hard cases.

6. WHAT WE STOP MEASURING
   From the current metric set, what gets retired? Metrics nobody acts on consume reporting
   effort and dilute attention. Name them.

7. REPORTING VIEW
   What the standard report contains, in what order, at what frequency, for which forum.
   One page. State what is on it and what is deliberately not.

8. THE HONEST GAP
   Which important things are not measurable here, and how will they be judged instead?
   Every metric set omits something that matters; naming it prevents the omitted thing
   from being treated as unimportant.

Rules:
- Fewer than 10 KPIs. If the list grows, the tree is being reported instead of the KPIs.
- Every KPI needs a single owner and a data source that exists today, or a dated plan to
  create it.
- Do not select a metric that cannot be influenced by the person accountable for it.

MATERIAL:
[PASTE STRATEGY, CURRENT METRICS, DATA SOURCES, INCENTIVE STRUCTURE]
```

## Output you should get

One outcome metric, an arithmetically valid tree, 5–9 fully specified KPIs, a leading/lagging
balance check, gaming analysis with guardrails, and a retirement list.

## Quality bar

- **Section 5 is mandatory and usually skipped.** Every metric will be gamed; design the
  guardrail before the behaviour appears.
- **Check that the tree is arithmetic,** not thematic. Drivers must combine into the parent.
- **Section 6 is what makes room for the new set.** Adding metrics without retiring any
  guarantees nobody reads them.

## Pairs with

- Precede with [39 Benefit Tracking](../4-build-execution/39-benefit-tracking.md)
- Follow with [48 Early Warning Signals](48-early-warning-signals.md)
- Follow with [45 Performance Review](45-performance-review.md)
