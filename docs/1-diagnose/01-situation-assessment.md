# 01 · Situation Assessment

**Phase:** 1 — Diagnose · **Runs before:** everything else · **Time:** 30–60 min with inputs ready

## What it does

Produces a cold, evidence-first read of where the business actually stands — performance,
position, and trajectory — before anyone proposes a solution. The job is to replace the
internal story ("we're a premium player with a temporary demand softness") with what the
numbers and the market say.

## Inputs you need

- 3 years of financials: revenue, gross margin, EBIT, by segment or product line if available
- Volume/price split on revenue if you have it
- Market share or a proxy (relative revenue vs. named competitors)
- Customer data: count, churn, concentration, NPS or equivalent
- Whatever the current strategy document or plan says the company is doing
- Known constraints: debt covenants, capacity limits, regulatory commitments

If you are missing several of these, run [04 Fact Base](04-fact-base.md) first.

## Prompt

```
You are a strategy director preparing a situation assessment for a board that has
asked for an unvarnished read. Your value comes from telling them what they have not
told themselves. You are not writing a summary of the material — you are interrogating it.

Below is everything I have on [COMPANY / BUSINESS UNIT].

Produce a situation assessment with these sections:

1. HEADLINE READ (5 sentences max)
   State plainly where this business stands and where it is heading. Lead with the
   single most important fact. No hedging, no "on the one hand."

2. PERFORMANCE DECOMPOSITION
   Table: metric | 3 years ago | last year | current | CAGR | what actually drove it.
   Split revenue movement into price, volume, and mix wherever the data allows. Say
   explicitly which movements are market-driven (the tide) and which are company-driven
   (the swimming). If you cannot separate them from the data given, say so.

3. POSITION
   Where does this business genuinely sit versus competitors on: cost, price realisation,
   customer retention, share trend, and capability? Rate each: advantaged / at parity /
   disadvantaged, and state the evidence for each rating. Mark any rating that rests on
   the company's own claims rather than external evidence.

4. TRAJECTORY
   If nothing changes, what does this business look like in 3 years? Give the arithmetic,
   not an adjective — extend the observed trends and state the resulting revenue, margin,
   and share. Then name the two or three things that would most change that path.

5. THE UNCOMFORTABLE FACTS
   List 3–6 facts visible in this material that the organisation is likely explaining
   away. For each: the fact, the explanation they probably use, and why that explanation
   does not survive the numbers.

6. WHAT I CANNOT TELL FROM THIS
   List the specific data gaps that materially limit this assessment, ordered by how much
   they would change the conclusion. Do not fill these gaps with assumptions.

Rules:
- Every claim traces to something in the material provided. Where you infer, write
  "Inference:" and give the reasoning.
- Do not invent numbers. Missing data goes in section 6.
- Do not recommend actions. This tool diagnoses only.

MATERIAL:
[PASTE FINANCIALS, MARKET DATA, CURRENT STRATEGY, CUSTOMER METRICS]
```

## Output you should get

Six named sections, a decomposition table, and an explicit gap list. Length: 800–1,500 words.
If it comes back shorter than that, your inputs were too thin.

## Quality bar

- **Reject it if** the performance section restates the numbers without decomposing them.
  "Revenue fell 8%" is data; "revenue fell 8% because volume fell 14% while price held,
  which means the problem is demand, not competitiveness" is diagnosis.
- **Reject it if** every position rating is "at parity." That is the output of a model
  hedging, not assessing.
- **Check** that section 5 contains at least one fact that genuinely annoys you. If nothing
  in it stings, the model is being polite with your data.

## Pairs with

- Follow with [07 Constraint Diagnosis](07-constraint-diagnosis.md) to find what governs the system
- Follow with [06 Issues List](06-issues-list.md) to convert the gaps into a work plan
- Feed section 6 into [09 Evidence Plan](09-evidence-plan.md)
