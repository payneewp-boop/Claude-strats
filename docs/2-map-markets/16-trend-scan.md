# 16 · Trend Scan

**Phase:** 2 — Map Markets · **Use when:** you need to separate durable shifts from noise

## What it does

Identifies the forces acting on the market, sorts them by how certain and how imminent they
are, and dates when each starts to bite. The output is a small set of shifts that matter with
their timing — not a list of buzzwords.

## Inputs you need

- Your market and its adjacencies
- Observed changes: regulatory, technological, demographic, economic, behavioural, competitive
- Anything you have on the pace of change: adoption curves, penetration rates, policy timelines

## Prompt

```
You are scanning the forces acting on [MARKET / INDUSTRY] over the next [3–5 YEARS] for
[COMPANY]. The output must be usable for planning, which means every trend needs a
magnitude and a date.

Produce:

1. TREND REGISTER
   Table: trend | category (regulatory / technological / demographic / economic /
   behavioural / competitive / supply chain / environmental) | evidence it is real
   (specific, with data) | direction | current stage (emerging / accelerating / mainstream /
   maturing) | when it materially affects us (year) | magnitude of effect on our revenue or
   cost | confidence.
   Exclude anything you cannot evidence, then report however many survive. If that is six,
   report six — a register padded to a target is the failure mode this tool exists to
   prevent. If it is fewer than five, state where you searched and found nothing.

2. CERTAINTY × IMPACT
   Plot every trend into four groups:
   - HIGH CERTAINTY, HIGH IMPACT: plan for these as facts. These belong in the base case.
   - HIGH CERTAINTY, LOW IMPACT: note and ignore.
   - LOW CERTAINTY, HIGH IMPACT: these drive scenario planning, not the base case.
   - LOW CERTAINTY, LOW IMPACT: drop.
   Name what belongs in each group.

3. THE CERTAIN ONES
   For each high-certainty/high-impact trend, write a short analysis: what is already
   locked in (demographics, announced regulation, installed technology base), what it means
   for demand, cost, and competition specifically for us, and by when. These are the trends
   people wrongly treat as speculative — the data already exists.

4. NOISE LIST
   Name the things currently being discussed as trends in this industry that the evidence
   does not support, or that are real but will not materially affect this business. Say why
   for each. This section earns the tool its keep — trend scans usually add noise rather
   than remove it.

5. SECOND-ORDER EFFECTS
   For the top three trends, state the consequence of the consequence. First-order effects
   are usually priced in by everyone; second-order effects are where advantage sits.

6. TIMING VIEW
   A simple year-by-year timeline: which trend bites in which year, and what the business
   would need to have ready before that.

7. WHAT WOULD CHANGE THIS SCAN
   The signals to watch that would move a trend between quadrants.

Rules:
- Every trend needs a specific evidence base — an adoption figure, a policy date, a
  demographic series. "Everyone is talking about it" is not evidence.
- Attach a magnitude to every trend, even if it is a range. Trends without magnitude
  cannot be prioritised.
- Do not list generic macro trends unless you can state how they affect this specific
  business differently from everyone else's.

MATERIAL:
[PASTE OBSERVED CHANGES, ADOPTION DATA, POLICY TIMELINES, MARKET CONTEXT]
```

## Output you should get

A register of 10–15 evidenced trends, a four-quadrant sort, a noise list, and a year-by-year
timing view.

## Quality bar

- **Section 4 must not be empty.** If the scan flags nothing as noise, it is a trend list
  rather than a scan.
- **Check that magnitudes are attached.** "AI will transform the industry" is not planning input.
- **The high-certainty quadrant is the most valuable.** Demographics and announced regulation
  are knowable; most organisations under-plan for them and over-plan for the speculative.

## Pairs with

- Feed the low-certainty/high-impact quadrant into [27 Scenario Comparison](../3-choose-strategy/27-scenario-comparison.md)
- Feed the certain quadrant into [23 Business Case Builder](../3-choose-strategy/23-business-case-builder.md) base case
- Follow with [17 White Space](17-white-space.md) — trends open gaps
