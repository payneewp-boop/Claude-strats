# 58 · Visual Story

**Phase:** 6 — Communicate · **Use when:** the argument needs exhibits that carry it

## What it does

Specifies the small set of exhibits that make an argument visible — what each shows, why that
chart form, what the takeaway headline is, and what data it needs. Produces a build
specification, not the charts themselves.

## Inputs you need

- The argument and its supporting analysis ([54 Pyramid Story](54-pyramid-story.md) output works well)
- The data available, and its granularity
- Format constraints: deck, memo, board pack, screen or print
- Audience: how numerate, how familiar with the subject

## Prompt

```
You are specifying the exhibits for [DOCUMENT / PRESENTATION] making the argument
[GOVERNING THOUGHT] to [AUDIENCE].

Every exhibit must earn its place by making one point that prose would make less clearly.
Exhibits that merely display data are cut.

Produce:

1. EXHIBIT PLAN
   Table: # | the point this exhibit proves | why a visual is better than a sentence here |
   chart form | data required | source.
   Maximum 8 exhibits for a full document, 3 for a memo. If a point can be made in a
   sentence, make it in a sentence.

2. EXHIBIT SPECIFICATIONS
   For each:
   - TAKEAWAY HEADLINE: a full sentence stating the point, which becomes the exhibit title.
     "Revenue by segment" is a label; "three segments now carry 80% of contribution, up from
     55% in 2022" is a takeaway. Every exhibit gets a takeaway title.
   - CHART FORM AND WHY: match form to message —
     composition → stacked bar or waterfall; comparison across categories → bar;
     change over time → line; contribution to a change → waterfall or bridge;
     relationship between two variables → scatter; distribution → histogram;
     flow between states → sankey; position on two dimensions → 2×2 or bubble.
     State why the chosen form fits this message and what alternative you rejected.
   - AXES, UNITS, PERIOD, SEGMENTS: precise
   - WHAT IS EMPHASISED: which series or point carries the message, and how it is made to
     stand out from the rest
   - ANNOTATION: the one or two labels on the exhibit that direct the eye to the finding
   - WHAT IS DELIBERATELY EXCLUDED: and why

3. THE SEQUENCE
   The order of exhibits, and how each builds on the last. State the visual argument: what
   the reader believes after exhibit 1 that makes exhibit 2 land. Exhibits should form a
   chain, not a gallery.

4. THE ONE EXHIBIT
   If only one could survive, which, and why? Design it to carry the whole argument alone.
   This is the one people photograph and forward.

5. DATA REQUIREMENTS
   Table: exhibit | data needed | source | do we have it | if not, what it takes to get it |
   fallback if unavailable.
   Flag any exhibit that depends on data we cannot obtain in time, and specify its substitute.

6. HONESTY CHECK
   For each exhibit, check for: truncated axes that exaggerate change, cherry-picked time
   periods, missing base rates, scale choices that flatter, dual axes implying a
   relationship that is not there, index bases chosen to favour the argument.
   State any place where a defensible alternative presentation would look materially worse
   for our case — and either fix it or be ready to answer for it.

7. WHAT NOT TO SHOW
   Exhibits that would be expected but should be cut, and why. Usually: data the audience
   already knows, detail that belongs in an appendix, and charts included because the
   analysis was hard rather than because the finding is important.

Rules:
- Every exhibit has a full-sentence takeaway title.
- One point per exhibit. Two points means two exhibits or one fewer point.
- Do not specify a visual where a number in a sentence would work better.

MATERIAL:
[PASTE ARGUMENT, ANALYSIS, AVAILABLE DATA, FORMAT AND AUDIENCE]
```

## Output you should get

At most eight specified exhibits with takeaway titles and justified chart forms, a sequenced
visual argument, one exhibit designed to stand alone, a data feasibility table, and an
honesty check.

## Quality bar

- **Section 6 is a credibility safeguard.** A truncated axis noticed by one person in the room
  discredits every other exhibit.
- **Section 4 is what actually gets remembered** and circulated — invest in it disproportionately.
- **Reject** any exhibit with a label title instead of a takeaway sentence.

## Pairs with

- Precede with [54 Pyramid Story](54-pyramid-story.md)
- Follow with [57 Executive Brief](57-executive-brief.md)
- Follow with [59 Key Message Summary](59-key-message-summary.md)
