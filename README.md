# Claude Strategy System

A library of 60 paste-ready strategy prompts, organized as a working sequence: diagnose the
situation, map the market, choose where to play, build the execution plan, govern the value,
and communicate the decision.

Each tool is a single markdown file containing what it does, the inputs it needs, a full
working prompt, the output structure it produces, and a quality bar for judging the result.

## How to use it

1. **Start with your real question**, not the tool number. The index below maps common
   questions to entry points.
2. **Gather the inputs listed in the file** before running the prompt. Every tool degrades
   into generic consulting prose when it is fed nothing specific.
3. **Paste the prompt, then paste your context underneath it.** The prompts are written to
   sit above a block of your own material — financials, transcripts, notes, a strategy deck.
4. **Chain them.** Each file ends with a "Pairs with" section. The strongest results come
   from running three or four tools in sequence and feeding each output into the next.

### Where to start

| If your question is… | Start at |
| --- | --- |
| "What is actually going on here?" | [01 Situation Assessment](docs/1-diagnose/01-situation-assessment.md) |
| "Why has growth stalled?" | [02 Growth Barriers](docs/1-diagnose/02-growth-barriers.md) |
| "Where does the money in this industry sit?" | [14 Profit Pool Analysis](docs/2-map-markets/14-profit-pool-analysis.md) |
| "Which market should we go after?" | [20 Attractiveness Map](docs/2-map-markets/20-attractiveness-map.md) |
| "What are our options and which one wins?" | [21 Strategic Options](docs/3-choose-strategy/21-strategic-options.md) |
| "Should we fund this?" | [23 Business Case Builder](docs/3-choose-strategy/23-business-case-builder.md) |
| "How do we actually deliver it?" | [33 Transformation Roadmap](docs/4-build-execution/33-transformation-roadmap.md) |
| "How will we know it is working?" | [43 KPI Architect](docs/5-govern-value/43-kpi-architect.md) |
| "What could go wrong?" | [41 War Gaming](docs/5-govern-value/41-war-gaming.md) |
| "How do I get the board to say yes?" | [53 Decision Memo](docs/6-communicate/53-decision-memo.md) |

## The 60 tools

### 1 · Diagnose — establish what is true before deciding anything
| # | Tool | One line |
| --- | --- | --- |
| 01 | [Situation Assessment](docs/1-diagnose/01-situation-assessment.md) | A cold, evidence-first read of where the business actually stands |
| 02 | [Growth Barriers](docs/1-diagnose/02-growth-barriers.md) | Decompose the growth gap and name what is blocking each part |
| 03 | [Assumption Audit](docs/1-diagnose/03-assumption-audit.md) | Surface the beliefs the current plan silently depends on |
| 04 | [Fact Base](docs/1-diagnose/04-fact-base.md) | Build the shared, sourced set of numbers everyone argues from |
| 05 | [Momentum Read](docs/1-diagnose/05-momentum-read.md) | Read direction and rate of change, not just levels |
| 06 | [Issues List](docs/1-diagnose/06-issues-list.md) | Convert mess into a ranked, answerable set of questions |
| 07 | [Constraint Diagnosis](docs/1-diagnose/07-constraint-diagnosis.md) | Find the one binding constraint that governs the system |
| 08 | [Root Cause Scan](docs/1-diagnose/08-root-cause-scan.md) | Trace symptoms back to causes that can actually be acted on |
| 09 | [Evidence Plan](docs/1-diagnose/09-evidence-plan.md) | Decide what to go find out, in what order, at what cost |
| 10 | [Test Plan](docs/1-diagnose/10-test-plan.md) | Design cheap experiments that can falsify the big beliefs |

### 2 · Map Markets — understand the terrain you are competing on
| # | Tool | One line |
| --- | --- | --- |
| 11 | [Market Mapping](docs/2-map-markets/11-market-mapping.md) | Draw the value chain and where the players sit on it |
| 12 | [Competitive Intel](docs/2-map-markets/12-competitive-intel.md) | Build an evidence-based profile of each rival's real position |
| 13 | [Customer Segmentation](docs/2-map-markets/13-customer-segmentation.md) | Cut the market by what drives behaviour, not by demographics |
| 14 | [Profit Pool Analysis](docs/2-map-markets/14-profit-pool-analysis.md) | Map where profit — not revenue — actually accumulates |
| 15 | [Market Sizing](docs/2-map-markets/15-market-sizing.md) | Size TAM/SAM/SOM two ways and reconcile the gap |
| 16 | [Trend Scan](docs/2-map-markets/16-trend-scan.md) | Separate durable shifts from noise and date their impact |
| 17 | [White Space](docs/2-map-markets/17-white-space.md) | Find unserved demand the current market structure ignores |
| 18 | [Rival Move Map](docs/2-map-markets/18-rival-move-map.md) | Predict each competitor's next three moves and your response |
| 19 | [Segment Priorities](docs/2-map-markets/19-segment-priorities.md) | Rank segments on value, winnability, and fit |
| 20 | [Attractiveness Map](docs/2-map-markets/20-attractiveness-map.md) | Plot markets on attractiveness vs. right to win |

### 3 · Choose Strategy — make the actual choice, with its costs stated
| # | Tool | One line |
| --- | --- | --- |
| 21 | [Strategic Options](docs/3-choose-strategy/21-strategic-options.md) | Generate genuinely distinct options, not one plan and two strawmen |
| 22 | [Pricing Strategy](docs/3-choose-strategy/22-pricing-strategy.md) | Set price from value and willingness to pay, then model the P&L |
| 23 | [Business Case Builder](docs/3-choose-strategy/23-business-case-builder.md) | Build a defensible case with explicit drivers and downside |
| 24 | [Portfolio Review](docs/3-choose-strategy/24-portfolio-review.md) | Decide what to grow, hold, fix, and exit across the portfolio |
| 25 | [Trade-off Analysis](docs/3-choose-strategy/25-trade-off-analysis.md) | Force the real sacrifice each option demands into the open |
| 26 | [Value Pool Choice](docs/3-choose-strategy/26-value-pool-choice.md) | Choose which pool of value you are going after and why |
| 27 | [Scenario Comparison](docs/3-choose-strategy/27-scenario-comparison.md) | Test each option against several futures, not one forecast |
| 28 | [Investment Judgment](docs/3-choose-strategy/28-investment-judgment.md) | Judge an investment on more than its NPV |
| 29 | [Allocation Choices](docs/3-choose-strategy/29-allocation-choices.md) | Reallocate money and people to match the stated strategy |
| 30 | [Decision Rights](docs/3-choose-strategy/30-decision-rights.md) | Say who decides what, and what that costs in speed |

### 4 · Build Execution — turn the choice into an operating plan
| # | Tool | One line |
| --- | --- | --- |
| 31 | [Operating Model Design](docs/4-build-execution/31-operating-model-design.md) | Design the structure, processes, and capabilities the strategy needs |
| 32 | [Initiative Prioritizer](docs/4-build-execution/32-initiative-prioritizer.md) | Cut the initiative list to what capacity can actually carry |
| 33 | [Transformation Roadmap](docs/4-build-execution/33-transformation-roadmap.md) | Sequence the work across horizons with dependencies honest |
| 34 | [Milestone Plan](docs/4-build-execution/34-milestone-plan.md) | Define milestones that prove progress rather than record activity |
| 35 | [Accountability Map](docs/4-build-execution/35-accountability-map.md) | Assign single-threaded ownership across every workstream |
| 36 | [Resource Plan](docs/4-build-execution/36-resource-plan.md) | Cost the plan in people, money, and calendar time |
| 37 | [Change Plan](docs/4-build-execution/37-change-plan.md) | Plan the human side: who must behave differently, and how |
| 38 | [Communication Plan](docs/4-build-execution/38-communication-plan.md) | Sequence the messages, audiences, channels, and moments |
| 39 | [Benefit Tracking](docs/4-build-execution/39-benefit-tracking.md) | Trace promised benefits to the P&L line they land in |
| 40 | [Execution Cadence](docs/4-build-execution/40-execution-cadence.md) | Design the meeting rhythm that makes the plan self-correcting |

### 5 · Govern Value — protect the value once the plan is running
| # | Tool | One line |
| --- | --- | --- |
| 41 | [War Gaming](docs/5-govern-value/41-war-gaming.md) | Play the strategy out against competitors who react |
| 42 | [Risk & Mitigation](docs/5-govern-value/42-risk-and-mitigation.md) | Identify what can break the plan and what you will do about it |
| 43 | [KPI Architect](docs/5-govern-value/43-kpi-architect.md) | Build a small metric tree that ties activity to outcome |
| 44 | [Value Realization](docs/5-govern-value/44-value-realization.md) | Check whether promised value is actually arriving |
| 45 | [Performance Review](docs/5-govern-value/45-performance-review.md) | Run an honest review that separates luck from execution |
| 46 | [Scenario Stress Test](docs/5-govern-value/46-scenario-stress-test.md) | Break the plan on purpose and find the breaking point |
| 47 | [Risk Register](docs/5-govern-value/47-risk-register.md) | Maintain the live register with owners, triggers, and status |
| 48 | [Early Warning Signals](docs/5-govern-value/48-early-warning-signals.md) | Define the leading indicators that fire before the damage |
| 49 | [Corrective Actions](docs/5-govern-value/49-corrective-actions.md) | Decide what to do when a metric goes red |
| 50 | [Governance Model](docs/5-govern-value/50-governance-model.md) | Set the forums, thresholds, and escalation paths |

### 6 · Communicate — make the decision land and stick
| # | Tool | One line |
| --- | --- | --- |
| 51 | [Stakeholder Alignment](docs/6-communicate/51-stakeholder-alignment.md) | Find where support is real, soft, or absent — and close the gap |
| 52 | [Narrative Builder](docs/6-communicate/52-narrative-builder.md) | Build the strategy story people can retell accurately |
| 53 | [Decision Memo](docs/6-communicate/53-decision-memo.md) | Write the memo that gets a decision made in the room |
| 54 | [Pyramid Story](docs/6-communicate/54-pyramid-story.md) | Structure the argument answer-first, MECE beneath |
| 55 | [Hostile Q&A](docs/6-communicate/55-hostile-qa.md) | Rehearse the questions designed to sink the proposal |
| 56 | [Stakeholder Map](docs/6-communicate/56-stakeholder-map.md) | Map power, interest, and position across the decision set |
| 57 | [Executive Brief](docs/6-communicate/57-executive-brief.md) | Compress everything to one page a busy executive can act on |
| 58 | [Visual Story](docs/6-communicate/58-visual-story.md) | Specify the exhibits that carry the argument |
| 59 | [Key Message Summary](docs/6-communicate/59-key-message-summary.md) | Reduce the strategy to messages that survive retelling |
| 60 | [Next Steps](docs/6-communicate/60-next-steps.md) | Close with owned, dated, unambiguous commitments |

## Testing the library

The prompts are kept honest by an adversarial test suite in [docs/GAUNTLET.md](docs/GAUNTLET.md):
seven rounds covering thin input, flattering input, null results, self-challenge, chain
integrity, and operator safety, with the findings and fixes from each pass logged. Run it after
any material edit.

## Writing your own tools — the Gauntlet

Every prompt here was specified, attacked, repaired, and tested before it went in. That method is
now packaged so you can hold new tools to the same bar:

- **[The prompt-writing app](app/index.html)** — open the file in a browser. It walks the seven
  stages, holds the state, enforces the ship gate, and exports a finished library entry as
  markdown. No install, no build, no network.
- **[The `prompt-gauntlet` skill](.claude/skills/prompt-gauntlet/SKILL.md)** — the same method for
  Claude to run itself. Copy the folder into any project's `.claude/skills/` to reuse it.
- **[The method, explained](docs/framework/README.md)** — the seven stages, the nine attack
  lenses, and why the ship gate counts things instead of scoring them.

## Conventions used in every file

- **Prompts are written for pasting.** Everything inside the fenced block goes to the model as-is;
  `[BRACKETED TEXT]` marks something you must replace.
- **Every prompt is told to flag missing inputs** rather than invent them. If a tool produces
  confident numbers you never supplied, that is a defect, not a feature.
- **Output structures are specified.** The prompts ask for tables and named sections so that
  outputs from different tools can be chained without reformatting.
- **Pasted material is evidence, not instruction.** Every prompt closes by telling the model
  that everything below the delimiter is to be analysed, never obeyed. This matters more than
  it sounds: the material you paste is often a vendor proposal, a competitor's deck, or a
  strategy document written to persuade a reader. Without the rule, a persuasive executive
  summary steers the analysis that was supposed to test it. Directions found in the material
  get reported as a fact about the source instead.

## License

MIT — see [LICENSE](LICENSE).
