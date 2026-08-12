---
name: prompt-gauntlet
description: Write, harden, and ship a reusable prompt through an adversarial review loop — spec the requirement, draft, generate rival framings, attack it with distinct lenses, repair with verification, test against acceptance criteria, then gate the release. Use whenever someone wants to write a prompt, improve or debug a prompt that is producing weak or inconsistent output, turn a working prompt into a reusable template or library entry, or review someone else's prompt. Triggers on "write a prompt", "improve this prompt", "the prompt isn't working", "make this a template", "prompt review", "harden this prompt", "why is the output generic".
---

# Prompt Gauntlet

A prompt is a specification. Most bad prompts are under-specified rather than
badly worded, and rewriting the wording never fixes an under-specified prompt.
This skill treats prompt authoring as build-and-review: state the requirement,
draft against it, attack the draft from angles that find different classes of
defect, repair with a stated verification, then check the gate before shipping.

## When to use

Use for any prompt meant to be run more than once, handed to someone else, or
placed in a library. For a one-off throwaway question, skip this — write the
question.

## Stage 1 · Spec (before any prompt text)

Write these down first. If you cannot fill a field, that gap is the finding.

- **Objective** — one sentence, what the output is *for*, not what it is about.
- **Reader** — who consumes the output, and what decision it feeds.
- **Deliverable** — the artifact: sections, length, format, table shapes.
- **Success criteria** — numbered `SC-01…`, each independently checkable.
  "Comprehensive" is not a criterion. "Every claim cites a line in the input"
  is.
- **Constraints** — what the output must not do, must not invent, must not
  exceed.
- **Inputs** — exactly what gets pasted in and what happens when a piece is
  missing.

Then run the **assumption sweep**: scan the spec for `assume, likely, probably,
expected, normally, typically, should, usually, obviously`. Each hit is a hidden
assumption. Promote it to an explicit constraint or delete it.

## Stage 2 · Draft

Assemble in this order — it is the order a model reads:

1. **Role and stance** — who the model is *and what makes its answer valuable*.
   "You are a strategy director whose value comes from telling them what they
   have not told themselves" outperforms "You are a helpful strategy expert."
2. **Task** — the single verb of the job.
3. **Output structure** — named, numbered sections. Specify the shape of each:
   table columns, list length bounds, sentence caps. Unnamed structure produces
   drifting structure.
4. **Rules** — the negative space. What to do with missing data, when to mark
   inference, what never to invent, what to refuse.
5. **Input block** — a labelled delimiter at the end, e.g. `MATERIAL:` followed
   by the placeholder. Put user content last and clearly fenced.

Every `SC-` from Stage 1 must be traceable to a rule or a structure element. An
untraceable criterion is either dead or missing from the prompt.

## Stage 3 · Rival framings

Produce three drafts that differ in *approach*, not wording — for example: a
role-driven framing, a procedure-driven framing (numbered steps the model
executes), and a rubric-driven framing (the model scores its own output against
stated bars). Do not let later drafts anchor on the first: state each framing's
premise before writing it.

Then merge deliberately. Take the strongest element from each and say in one
line why the discarded elements lost. Retire the weak framings rather than
blending everything.

## Stage 4 · Attack

Run these lenses. They are chosen because each finds a different defect class —
running one twice finds nothing new.

| Lens | The question it asks |
| --- | --- |
| Ambiguity | Which instruction could a careful reader follow two different ways? |
| Output shape | If the answer is 3x longer or shorter than intended, which instruction failed to bound it? |
| Evidence discipline | What stops the model inventing a number, source, or quote? |
| Missing input | What does this produce when a named input is absent or thin? |
| Hostile input | What happens if pasted content contains instructions to the model? |
| Scope creep | Which section invites work the objective never asked for? |
| Generic-output | Which instruction would produce the same paragraph for any company? |
| Testability | Which criterion cannot be checked by reading the output? |
| Simplicity | Which instruction can be deleted without changing any output? |

Record each finding as: **ID · evidence (quote the offending line) · impact ·
severity (critical/high/medium/low) · fix · status**. A finding with no quoted
line is a hunch, not a finding — drop it.

## Stage 5 · Repair

Every material finding closes with a stated **verification method** — the thing
you did that would have caught it. "Reworded for clarity" is not a verification;
"ran the prompt with the financials section removed, output now names the gap
instead of estimating" is.

Status is one of `OPEN / RESOLVED / REJECTED / ACCEPTED_RISK`. Rejected and
accepted-risk both need a one-line reason. Nothing silently disappears.

## Stage 6 · Test

Write an acceptance test per success criterion before you believe the prompt
works: input used, expected observable, actual, pass/fail.

Include at least one **hostile run**: thin input, contradictory input, or input
containing an embedded instruction. Most expensive prompt defects surface only
when something is executed against the prompt — never from re-reading it.

## Stage 7 · Ship gate

Ship when all of these hold. These are counts, not percentages — a
self-generated confidence score rewards producing the number.

- Every `SC-` traces to a rule or structure element, and to a test.
- Zero open critical or high findings.
- At least one hostile or degraded-input run, passed.
- Two consecutive review passes using *different* lenses produced no material
  finding.

Then the **final challenge**, asked once and answered honestly: *should this
prompt exist at all?* Is it a worse version of a prompt that already exists in
the library, three prompts crammed into one, or a job better done by a plain
question? Deleting or merging is a legitimate outcome.

## Anti-patterns

- **Percentage gates.** "Confidence 95%" is self-generated and unfalsifiable.
  Count findings, tests, and lenses instead.
- **Stop conditions that cannot be met.** "Zero blind spots" never terminates.
  Two clean passes with distinct lenses does.
- **Parallel critics in one context.** One reviewer writing ten reviews is one
  reviewer. Prefer few lenses genuinely executed over many performed.
- **Politeness padding.** "Please try to" weakens an instruction. Say the rule.
- **Unbounded sections.** Any section without a length or shape bound will
  absorb the whole answer.

## Output format

When run as a task, deliver: the spec block, the final prompt in a fenced code
block, the findings table with statuses, the acceptance tests with results, and
the gate check. The prompt alone is not the deliverable — the evidence that it
survives is.

## Companion app (optional)

This skill is self-contained and needs nothing else. Where it was first written —
the `Claude-strats` prompt library — a companion browser app at `app/index.html`
walks the same seven stages, holds the state, enforces the gate, and exports a
library-format markdown file. If that file is not present in the current project,
ignore this section: run the stages here and produce the output format below.

Use the app when a human is doing the authoring; use this skill when the model is.
