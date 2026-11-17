// TMI Stages 1–6 content and question banks.
// Grounded in Culadasa's The Mind Illuminated (condensed practice guide).
// Design note on MCQ items: correct answers are spread across positions,
// and option lengths are matched so the right answer can't be spotted by length.

const STAGES = [
  {
    n: 1,
    title: "Establishing a Practice",
    subtitle: "Stage One",
    goal: "A consistent daily practice — meditating to the best of your ability every session.",
    // TRAIN: the essentials, written to learn/refresh from
    train: [
      { h: "What this stage trains", p: "Two things a monastic already had: the <em>motivation</em> to practise at all, and the <em>habit</em> that keeps practice running even when motivation dips. The attention work of later stages is impossible without it — sit only twice a week and the gains never compound; each session half-rebuilds from cold." },
      { h: "The two goals", p: "First, learn to prepare for and enter a sit reliably (the Six Points and the Four-Step Transition). Second and more important: establish a consistent daily practice. Mastery is consistency plus diligence, <em>not</em> attainment — you have mastered it when you sit near-daily and meditate to the best of your ability whenever you sit, regardless of how the session feels." },
      { h: "Six Point Preparation", p: "Done at the start of every sit: <strong>Motivation</strong> (why you meditate at all), <strong>Goals</strong> (what you'll work on this session), <strong>Expectations</strong> (release them — any and every sit is a good sit), <strong>Diligence</strong> (engage wholeheartedly, don't daydream), <strong>Distractions</strong> (inventory and set aside), <strong>Posture</strong> (stable yet relaxed — like soft clay)." },
      { h: "The Four-Step Transition", p: "Narrow the aperture in stages: <strong>Present</strong> (open awareness, all senses) → <strong>Body</strong> (bodily sensations) → <strong>Breath-body</strong> (breath-related sensations) → <strong>Nose</strong> (breath sensations at the nose). Rationale: attention follows salience, so you narrow until the breath — the one thing still moving in a quiet body — becomes the most salient object and attention settles there willingly." },
      { h: "Counting", p: "Once at the nose, count breaths to stabilise: never more than ten, never less than five. If you lose count, restart at one. Place the count at the end of the out-breath to fill the gap where the mind escapes. Stop once stable — counting becomes automatic and stops being a reliable signal." },
      { h: "The four obstacles", p: "<strong>Not enough time</strong> (make practice a priority — nobody builds a practice in 'spare' time). <strong>Procrastination</strong> (keeps you off the cushion). <strong>Reluctance &amp; resistance</strong> (gets you on the cushion but you daydream instead of practising). <strong>Doubt</strong> (self-doubt saps motivation and poisons the other three)." },
      { h: "The real solution", p: "Diligence (\"just do it\") starts you off, but the durable fix is learning to <em>enjoy</em> the sit. Savour physical comfort and the pleasure of quietness. Enjoyment is the input that makes practice work, not a reward for doing it right. Force, guilt and willpower don't build a sustainable practice — train yourself gently, don't clamp." },
    ],
    // GRILL: rapid MCQ; feedback on every option
    grill: [
      {
        q: "What is the <em>most important</em> goal of Stage One?",
        options: [
          { t: "Mastering the Six Point Preparation until it runs in a matter of seconds", ok: false, why: "The Six Points are a Stage One goal, but the lesser of the two — a means, not the headline." },
          { t: "Establishing a consistent daily practice, meditating to your best each sit", ok: true, why: "Consistency is the headline goal; everything downstream depends on it." },
          { t: "Sustaining attention on the breath for minutes without forgetting it", ok: false, why: "That's the work of Stages Two and Three, not Stage One." },
          { t: "Entering a state of joyful access concentration before each sit ends", ok: false, why: "Access concentration and joy arrive far later, around Stage Six onward." },
        ],
      },
      {
        q: "Which is <em>not</em> one of the Six Point Preparation?",
        options: [
          { t: "Diligence", ok: false, why: "Diligence is one of the six — engage wholeheartedly rather than daydream." },
          { t: "Expectations", ok: false, why: "Expectations is one of the six — bring the dangers of expectation to mind and release them." },
          { t: "Patience", ok: true, why: "Patience is a real meditative quality but not on the list. The six are motivation, goals, expectations, diligence, distractions, posture." },
          { t: "Posture", ok: false, why: "Posture is one of the six — stable yet relaxed, like soft clay." },
        ],
      },
      {
        q: "What distinguishes <em>procrastination</em> from <em>reluctance and resistance</em>?",
        options: [
          { t: "They are simply two different names for the very same obstacle", ok: false, why: "They share a root (aversion to the work) but strike at different points — and the fixes differ." },
          { t: "Procrastination is a mental event; resistance is a physical one", ok: false, why: "Both are mental; the difference is where in the process they appear, not mind vs. body." },
          { t: "Procrastination keeps you off the cushion; resistance wastes the sit in daydreaming", ok: true, why: "Procrastination stops you sitting down; resistance gets you seated but spends the time planning or fantasising." },
          { t: "Procrastination hits beginners; resistance only hits advanced meditators", ok: false, why: "Both can hit anyone, at any level; experience doesn't sort them." },
        ],
      },
      {
        q: "A student forces themselves onto the cushion by willpower and grits through every sit. The TMI issue is:",
        options: [
          { t: "Nothing is wrong — willpower is exactly what Stage One demands of you", ok: false, why: "TMI is explicit that force and willpower don't build a sustainable practice." },
          { t: "They lack discipline and simply need to grit their teeth and try harder", ok: false, why: "The opposite — more grinding deepens the aversion that's the real problem." },
          { t: "They should skip the preparation and go straight to the breath at the nose", ok: false, why: "The preparation isn't the issue, and skipping it removes a settling tool." },
          { t: "Force and guilt don't sustain practice — train gently and find real enjoyment", ok: true, why: "The aim is to work on motivation and intention until sitting follows naturally, and to make the sit genuinely pleasant." },
        ],
      },
      {
        q: "What does it mean to have <em>mastered</em> Stage One?",
        options: [
          { t: "You no longer need to run the Six Point Preparation before a sit", ok: false, why: "The preparation just gets faster; you never really outgrow it." },
          { t: "You can focus on the breath for an entire session without any distraction", ok: false, why: "That's a later-stage fruit, not the Stage One bar." },
          { t: "A consistent near-daily practice, meditating diligently to your best whenever you sit", ok: true, why: "Mastery here is consistency plus diligence, regardless of how 'good' any sit feels." },
          { t: "You experience distinct joy and pleasure in every session that you sit", ok: false, why: "Pervasive joy is a much later development; it isn't the Stage One criterion." },
        ],
      },
      {
        q: "Why count only up to ten breaths rather than count the whole sit?",
        options: [
          { t: "Counting past ten tends to make the mind drowsy and dull", ok: false, why: "Dullness has other causes; the reason to stop is about reliability, not sleepiness." },
          { t: "Ten is simply the most breaths the mind is able to track at once", ok: false, why: "The mind can 'count' indefinitely — that's exactly the problem." },
          { t: "Counting beyond ten starts to disrupt your peripheral awareness", ok: false, why: "Counting isn't the threat to awareness here; automaticity is the issue." },
          { t: "Counting becomes automatic — you can count while already wandering", ok: true, why: "Past ten it stops being a reliable signal of actual attention, so it loses its value." },
        ],
      },
      {
        retired: true, // superseded by S1 grill Q16
        q: "Why treat the <em>beginning of the out-breath</em> as the start of the cycle?",
        options: [
          { t: "It puts the long pause mid-cycle, so the mind doesn't treat a breath as finished", ok: true, why: "The long pause comes at the end of the out-breath, and it's where attention slips away. Starting the cycle at the out-breath puts that pause in the middle, so you are still 'inside' a breath. Culadasa: the pause then 'occurs in the middle of your cycle, and is less likely to trip you up.'" },
          { t: "The out-breath carries stronger, clearer sensations to track than the in-breath", ok: false, why: "Sensation strength isn't the reason; it's about where the vulnerable pause lands." },
          { t: "It is the traditional Theravada method for counting the breath", ok: false, why: "This is a practical tip from Culadasa, not a tradition claim." },
          { t: "It makes each full breath cycle last noticeably longer than usual", ok: false, why: "You breathe naturally; the technique reframes the cycle, it doesn't lengthen it." },
        ],
      },
      {
        q: "The most effective long-term antidote to procrastination and resistance is:",
        options: [
          { t: "Stricter rules and consequences for missing a sit", ok: false, why: "Rules-and-guilt is the willpower engine TMI says burns out." },
          { t: "Learning to genuinely enjoy the practice", ok: true, why: "Once you taste the pleasure of a sit, procrastination and resistance fade on their own." },
          { t: "Meditating only on the days you feel inspired", ok: false, why: "That surrenders the consistency the whole stage is built to create." },
          { t: "Extending each session so that it 'counts' for more", ok: false, why: "Longer, grimmer sits increase resistance rather than dissolving it." },
        ],
      },
    ],
    // TEST: open questions with model answers + rubric
    open: [
      {
        q: "Culadasa adds Stage One, 'Establishing a Practice,' to Asanga's older nine-stage model — it isn't in the traditional map. Why does a <em>householder</em> need this stage when a monastic didn't? And what does it tell you about what Stage One is actually training, given that it sits <em>before</em> the attention work of later stages?",
        model: "The monastic has already resolved the motivation question and lives inside a structure that protects practice, so the traditional map could start at the attention work. The householder has neither settled resolve nor scaffolding — competing demands, no supportive community — so the practice itself must build both. Stage One therefore trains two things: the <strong>motivation</strong> to practise at all, and the <strong>habit</strong> that runs even when motivation dips. It sits before the attention work because that work is worthless without it: sit only twice a week and the gains never compound, each session half-rebuilds from cold. And the habit must be built through motivation and enjoyment, not force or guilt — a householder white-knuckling practice into a busy life burns out.",
        rubric: [
          "Monastic already has motivation + supportive structure; householder has neither",
          "Names BOTH what the stage trains: motivation AND habit/consistency (not just one)",
          "Explains why it comes first: attention work can't compound without consistency",
          "Notes the habit is built gently (enjoyment/motivation), not by force",
        ],
      },
      {
        q: "A student says: 'I sit down, do my breath meditation, and spend basically the whole session lost in thought. I'm clearly failing — I don't have the discipline for it.' Diagnose what's going on in TMI terms: name the specific obstacle, separate it cleanly from its neighbour, and get the attitude correction right.",
        model: "This is <strong>reluctance and resistance</strong> — the third obstacle. The tell is in the report: they're sitting down fine, but spending the session daydreaming instead of practising. Separate it from <strong>procrastination</strong>, which keeps you off the cushion entirely. Same root (aversion), different point of attack — and different fix: procrastination needs 'just sit down'; resistance needs motivation and, ultimately, learning to enjoy the practice so the mind stops fleeing it. The attitude correction: they haven't failed and it isn't a discipline problem. Noticing the mind has wandered IS the skill being trained. Don't hand back a practice that runs on discipline — they already mistrust theirs. Hand them one that runs on ease and enjoyment: savour the comfort, find one pleasant sit, let that recruit the next.",
        rubric: [
          "Names the obstacle as reluctance/resistance (not just 'distraction')",
          "Separates it from procrastination (seated-but-daydreaming vs. never-sitting)",
          "Reframes noticing-the-wander as the skill itself, not failure",
          "Corrects toward enjoyment/ease rather than more control or discipline",
        ],
      },
      {
        q: "Why does Culadasa spread the entry into practice over the Four-Step Transition rather than just putting attention on the breath straight away? Give the deeper training rationale — what the transition teaches, and what it exploits about how a scattered mind behaves.",
        model: "Two things. First, it's a repeated rehearsal of the core TMI skill — distinguishing peripheral awareness from focused attention, and narrowing the aperture while keeping the periphery alive — practised in miniature every sit before you even reach the breath. Second, and subtler: it works <em>with</em> a scattered mind rather than against it. A hard, high-contrast constraint ('focus only on the breath, now') meets resistance and evasion; a gentle, staged narrowing meets cooperation. The mechanism it exploits is salience — attention follows what's most salient. At each step you shrink the field so fewer things compete, until in a quiet body the breath is the most interesting thing still moving, and attention lands there willingly rather than being dragged. The body and breath-body steps also seed enjoyment (savour pleasant sensation), so the on-ramp does motivational and attentional work at once.",
        rubric: [
          "Transition rehearses the attention/awareness distinction + aperture control",
          "Gentle staged narrowing avoids the resistance a hard constraint provokes",
          "Names salience: narrowing the field until the breath is the most salient object",
          "Bonus: notes it also seeds enjoyment / works with rather than against the mind",
        ],
      },
    ],
  },

  {
    n: 2,
    title: "Interrupted Attention",
    subtitle: "Stage Two",
    goal: "Shorten mind-wandering; extend sustained attention on the breath.",
    train: [
      { h: "What this stage trains", p: "Shortening the episodes of mind-wandering and lengthening the stretches of sustained attention. Mastery: attention sustained for minutes, with most wandering episodes lasting only seconds." },
      { h: "The cycle", p: "Distraction → <strong>forgetting</strong> (you lose the breath) → <strong>mind-wandering</strong> → the <strong>aha! moment</strong> (spontaneous introspective awareness — 'waking up' to the fact you'd wandered) → return. The aha! moment is not under conscious control — your job is to reinforce it so it fires sooner." },
      { h: "The key move: cherish the aha!", p: "When you notice you've wandered, <em>don't</em> immediately jump back to the breath. Pause and savour the moment of waking up. Cherishing it is positive reinforcement — it trains the unconscious to surface that moment of noticing sooner and sooner. Then redirect gently, unhurriedly — redirect, don't wrench." },
      { h: "Three intentions", p: "Hold them together: (1) appreciate the aha! moment, (2) gently redirect attention to the breath, (3) engage fully with the breath without losing peripheral awareness." },
      { h: "Following the breath", p: "To sustain attention, get interested: find the exact moment the in-breath starts and ends, and the out-breath; notice the pauses; observe all points with equal clarity; note as many distinct sensations as you can. Aids like silent noting ('beginning, end') or a sense of expansion/contraction help — drop them once no longer needed." },
      { h: "Monkey-mind", p: "Distinct from ordinary mind-wandering — rapid, agitated jumping. The antidote is counter-intuitive: 'give it a larger cage.' Expand attention back out (to the whole body or all senses, Steps 1–2). Never try to hold the monkey still; intentionally widen the locus instead." },
      { h: "Impatience", p: "Seek and acknowledge the positives — comfort, a moment of stillness, just showing up. Don't identify with it: say 'impatience is arising,' not 'I am impatient.' As pleasure and harmony grow, conflicting sub-minds align into a feedback loop of calm and joy." },
    ],
    grill: [
      {
        q: "In the Stage Two cycle, what is the 'aha! moment'?",
        options: [
          { t: "The instant you deliberately decide to return to the breath", ok: false, why: "The return is deliberate, but the aha! is the spontaneous <em>noticing</em> that precedes it." },
          { t: "A flash of insight into impermanence while watching the breath", ok: false, why: "That's an insight experience, not the moment of waking up from wandering." },
          { t: "The spontaneous moment of realising attention had wandered off", ok: true, why: "It's spontaneous introspective awareness — 'waking up' to the fact you'd forgotten the breath." },
          { t: "The point where the breath becomes pleasant and absorbing", ok: false, why: "Pleasantness can arise, but the aha! specifically names the noticing of a lapse." },
        ],
      },
      {
        q: "When you notice you've been mind-wandering, what should you do <em>first</em>?",
        options: [
          { t: "Immediately snap attention back to the breath at the nose", ok: false, why: "Snapping back wastes the most valuable instant and can become a tense wrench." },
          { t: "Pause and savour the moment of waking up before returning", ok: true, why: "Cherishing the aha! reinforces it so it fires sooner next time — this is the core training." },
          { t: "Note how long you were gone so you can track progress", ok: false, why: "Measuring turns into discursive thinking; the move is to appreciate, not audit." },
          { t: "Label the wandering thought in detail and analyse its content", ok: false, why: "Detailed analysis of content belongs to later labeling work and pulls you back in here." },
        ],
      },
      {
        q: "Why cherish the aha! moment rather than treat it as a failure?",
        options: [
          { t: "Because self-criticism is generally unpleasant to experience", ok: false, why: "True but beside the point — the reason is mechanistic, about training the unconscious." },
          { t: "Because it proves the meditation session is going well", ok: false, why: "It isn't a scorecard; wandering happens in good and bad sits alike." },
          { t: "Positive reinforcement trains the unconscious to surface it sooner", ok: true, why: "You can't will the aha! to come — but rewarding it conditions it to arrive earlier." },
          { t: "Because the moment of noticing is itself a form of deep insight", ok: false, why: "It's introspective awareness, not insight into the three characteristics." },
        ],
      },
      {
        q: "What is the correct antidote to monkey-mind?",
        options: [
          { t: "Tighten focus hard onto a single point of the breath", ok: false, why: "Clamping down on an agitated mind makes it buck harder, not settle." },
          { t: "Count breaths faster to keep pace with the jumping", ok: false, why: "Racing the mind feeds the agitation rather than calming it." },
          { t: "Stop the session and restart once the mind is calmer", ok: false, why: "Quitting isn't the method; widening the field is." },
          { t: "Give it a larger cage — expand attention to body or all senses", ok: true, why: "Widening the locus lets the agitation settle; never try to hold the monkey still." },
        ],
      },
      {
        q: "The TMI-recommended way to handle impatience during a sit is to:",
        options: [
          { t: "Acknowledge the positives and note 'impatience is arising', not 'I am impatient'", ok: true, why: "Non-identification plus seeking the pleasant aspects defuses it and builds the calm-joy loop." },
          { t: "Push through it by sheer force of will until the session timer finally ends", ok: false, why: "Forcing through reinforces the grind; TMI works with pleasantness, not willpower." },
          { t: "Shorten the remaining sit so the impatience has less time to build up", ok: false, why: "That concedes to the impatience rather than working with it on the cushion." },
          { t: "Analyse where the impatience is really coming from in your daily life", ok: false, why: "Discursive analysis of causes pulls you off the object; the move is non-identification." },
        ],
      },
      {
        q: "How do you know you're ready to move from Stage Two to Stage Three?",
        options: [
          { t: "Forgetting has completely stopped happening in your sits", ok: false, why: "Forgetting may still occur at the Two→Three boundary; it's wandering that's shrunk." },
          { t: "You can count to ten breaths without losing the count", ok: false, why: "That's closer to the One→Two marker; Stage Three is about sustained attention." },
          { t: "You have 10–15 minute periods without mind-wandering", ok: true, why: "Extended stretches free of wandering (forgetting may still occur) mark the transition." },
          { t: "Pleasant jhanic absorption arises reliably in each session", ok: false, why: "Absorption is a much later development, not the Two→Three signal." },
        ],
      },
    ],
    open: [
      {
        q: "A student is frustrated: 'Every time I catch myself wandering I feel like I've failed, so I yank my attention back to the breath hard and try to clamp it there. It's exhausting and it's not working.' What two distinct Stage Two errors are they making, and how would you correct each?",
        model: "Two errors. First, they're treating the aha! moment as failure rather than as the thing to cherish. The correction: the moment of noticing is a success — it's spontaneous introspective awareness, the exact faculty Stage Two develops. Pause and savour it; that positive reinforcement conditions the unconscious to surface it sooner. Second, they're <em>wrenching</em> attention back and clamping it, which is both the wrong action and the wrong energy. The correction: redirect gently and unhurriedly — redirect, not wrench — and hold peripheral awareness rather than squeezing down to a point. The clamping is also likely to provoke more agitation (toward monkey-mind), where the real move would be to widen, not narrow. Underneath both: the attitude is adversarial when it should be appreciative and relaxed.",
        rubric: [
          "Error 1: treating the aha! as failure → correct to cherishing/savouring it",
          "Error 2: wrenching/clamping → correct to gentle unhurried redirect + keep peripheral awareness",
          "Connects the reinforcement mechanism (cherishing trains the unconscious)",
          "Notes clamping risks agitation; relaxed attitude over adversarial one",
        ],
      },
      {
        q: "Distinguish mind-wandering from monkey-mind, and explain why the antidote to monkey-mind ('give it a larger cage') seems backwards but works.",
        model: "Mind-wandering is the ordinary cycle — attention quietly slips off the breath, you're carried along a train of thought, and eventually the aha! wakes you. Monkey-mind is different in texture: rapid, agitated jumping from object to object, more restless and energetic. The antidote looks backwards because the instinct with an unruly mind is to clamp down and force it onto one point. But clamping an agitated mind makes it buck harder — it resists and evades. Giving it a larger cage means deliberately <em>expanding</em> the scope of attention back out to the whole body or all the senses (Steps 1–2 of the transition). Within that wider field the agitation has room to discharge and settle on its own, after which you can narrow again. You never try to hold the monkey still; you widen the locus so the restlessness isn't fighting a tight constraint.",
        rubric: [
          "Mind-wandering = quiet drift along a thought-train; monkey-mind = rapid agitated jumping",
          "Explains the instinct (clamp down) and why it backfires (agitation increases)",
          "'Larger cage' = deliberately expand scope to body/all senses",
          "Note: never hold the monkey still; widen then re-narrow",
        ],
      },
    ],
  },

  {
    n: 3,
    title: "Extended Attention",
    subtitle: "Stage Three",
    goal: "Overcome forgetting (and dozing); keep the breath continuously in awareness.",
    train: [
      { h: "What this stage trains", p: "Overcoming <strong>forgetting</strong> — and the sleepiness that often accompanies it. Mastery: forgetting and mind-wandering rarely occur; the breath stays in awareness throughout. Two tools do the work: extending stable attention, and cultivating introspective awareness." },
      { h: "The chain to interrupt", p: "Subtle distraction (background) → gross distraction (foreground, breath dimmed) → forgetting (breath lost entirely). The target is to catch distractions before they become gross, and gross before it causes forgetting." },
      { h: "Following and Connecting", p: "Two attention-extending skills. <strong>Following</strong>: discern all major points of the breath cycle with equal clarity and pick out multiple distinct sensations within each in- and out-breath — the goal is sharper perception and sustained interest. <strong>Connecting</strong>: compare the two pauses (which is longer?), compare in- vs out-breath durations, track changes over time, and notice how breath changes correlate with mind-state." },
      { h: "Labeling", p: "At the moment you realise you've wandered, give a simple neutral label — 'thinking,' 'planning,' 'remembering.' Label only the most recent thought, keep it simple, don't get absorbed in the labeling. Then let go and return to the breath." },
      { h: "Checking in (the crucial one)", p: "Deliberately turn attention inward roughly every six breaths (don't count) to assess mind-state: Is gross distraction present? Is dullness increasing? If gross distraction is found, tighten focus on breath details before it causes forgetting. Checking in briefly disrupts focus — that's fine, and it's the mechanism that builds introspective awareness. This is the bridge to Stage Four: deliberate check-in gradually becomes spontaneous introspective awareness." },
      { h: "Pain", p: "Ignore it as long as you can. When it's too strong, make the pain itself the meditation object and investigate: sharp/dull/burning? constant or fluctuating? one sensation or composite? how much is reaction versus raw sensation? Formula: Suffering = Pain × Resistance — drop the resistance and suffering falls toward zero. If you must move, decide in advance when and what, then observe the movement fully." },
      { h: "Drowsiness and dullness", p: "The slide: subtle dullness → strong dullness → drowsiness → sleep. Antidotes mild to strong: (1) three or four deep breaths, exhaling forcefully through pursed lips; (2) tense the whole body till trembling, relax, repeat; (3) stand to meditate; (4) walking meditation; (5) cold water on the face. After rousing, expand peripheral awareness to sounds and bodily sensations — dullness means too inward and under-stimulated. If dullness returns almost at once ('sinking'), use a stronger antidote." },
    ],
    grill: [
      {
        q: "Put the chain that ends in forgetting in the correct order:",
        options: [
          { t: "Gross distraction → subtle distraction → forgetting", ok: false, why: "Reversed — subtle comes first, in the background, before anything reaches the foreground." },
          { t: "Subtle distraction → gross distraction → forgetting", ok: true, why: "Subtle (background) grows to gross (foreground, breath dimmed), which then tips into forgetting." },
          { t: "Forgetting → gross distraction → subtle distraction", ok: false, why: "Forgetting is the end of the chain, not the start." },
          { t: "Subtle distraction → forgetting → gross distraction", ok: false, why: "Gross distraction is the stage between subtle and forgetting, not after it." },
        ],
      },
      {
        q: "What is the purpose of 'checking in' every few breaths?",
        options: [
          { t: "To count progress so you know how long you've focused", ok: false, why: "It isn't measurement; you don't even count the breaths precisely." },
          { t: "To rest attention briefly so it doesn't fatigue", ok: false, why: "It's not a rest — it's an active inward assessment of mind-state." },
          { t: "To assess mind-state and catch gross distraction or dullness early", ok: true, why: "You turn inward to ask: is gross distraction present? is dullness growing? — then correct before forgetting." },
          { t: "To deepen concentration by narrowing onto the breath further", ok: false, why: "Checking in briefly <em>disrupts</em> focus on purpose; that's the point, not deeper narrowing." },
        ],
      },
      {
        q: "Checking in briefly disrupts your focus on the breath. Why is that acceptable?",
        options: [
          { t: "Because concentration isn't really the goal you're pursuing at this stage", ok: false, why: "Extending attention very much is a goal here; the disruption just serves a second one." },
          { t: "Because the disruption is the mechanism that builds introspective awareness", ok: true, why: "The brief inward turn is exactly how spontaneous introspective awareness is trained — the Stage 3→4 bridge." },
          { t: "Because you will regain the lost focus again almost instantly anyway", ok: false, why: "Recovery speed isn't the justification; the disruption itself does useful work." },
          { t: "Because gross distraction has usually broken your focus already regardless", ok: false, why: "You check in whether or not distraction is present; it's not contingent on that." },
        ],
      },
      {
        q: "According to the TMI formula, Suffering equals:",
        options: [
          { t: "Pain minus the attention you pay to it", ok: false, why: "Not subtraction, and not simply attention — the second factor is resistance." },
          { t: "Pain plus the duration you sit with it", ok: false, why: "Duration isn't the variable; resistance is, and it's a product, not a sum." },
          { t: "Pain divided by your level of concentration", ok: false, why: "Concentration isn't the term; the formula is Pain × Resistance." },
          { t: "Pain multiplied by Resistance", ok: true, why: "S = P × R — drop the resistance and suffering falls toward zero even if pain remains." },
        ],
      },
      {
        q: "After rousing yourself from dullness with an antidote, what should you do?",
        options: [
          { t: "Narrow attention tightly onto the breath to re-stabilise", ok: false, why: "Narrowing inward is what fed the dullness; you want to open out." },
          { t: "Expand peripheral awareness to include sounds and body sensations", ok: true, why: "Dullness = too inward and under-stimulated, so re-broaden to sounds and bodily sensation." },
          { t: "End the sit early to avoid sliding back into drowsiness", ok: false, why: "You don't have to quit; re-broadening and, if needed, a stronger antidote handle it." },
          { t: "Immediately repeat the strongest antidote on the list", ok: false, why: "Escalate only if dullness actually returns ('sinking'); otherwise re-broaden awareness." },
        ],
      },
      {
        q: "'Sinking' — dullness returning almost immediately after an antidote — calls for:",
        options: [
          { t: "Accepting it, since some dullness is unavoidable", ok: false, why: "Progressive dullness that returns fast must be corrected, not accepted." },
          { t: "Repeating the exact same antidote you just used", ok: false, why: "If it returned at once, that antidote wasn't strong enough — step up." },
          { t: "A noticeably stronger antidote than the one that failed", ok: true, why: "Rapid return signals you need to escalate up the mild-to-strong list." },
          { t: "Switching the meditation object away from the breath", ok: false, why: "The object isn't the problem; the level of arousal is." },
        ],
      },
    ],
    open: [
      {
        q: "Stage Three uses two pairs of tools — Following + Connecting, and Labeling + Checking In. Explain what each pair is <em>for</em>, and why Checking In is singled out as the bridge to Stage Four.",
        model: "The two pairs serve the two tasks of the stage. <strong>Following + Connecting</strong> extend stable attention: Following sharpens perception and sustains interest by discerning the breath's phases and multiple distinct sensations; Connecting keeps the mind engaged by comparing pauses, durations, and how the breath tracks mind-state. Interest is what keeps attention from slipping, so these directly fight forgetting by making the object absorbing. <strong>Labeling + Checking In</strong> build introspective awareness: Labeling catches a wander at the moment of noticing with a light neutral tag, then releases; Checking In deliberately turns attention inward every few breaths to assess whether gross distraction or dullness is creeping in, so you can correct before forgetting. Checking In is the bridge to Stage Four because it starts as a <em>deliberate</em> act and, through repetition, matures into <em>spontaneous</em> introspective awareness — which is precisely the continuous, automatic self-monitoring that Stage Four runs on. You're training a reflex by doing it on purpose until it does itself.",
        rubric: [
          "Following + Connecting = extend stable attention (sharpen perception, sustain interest/engagement)",
          "Labeling + Checking In = cultivate introspective awareness",
          "Ties the point of interest/engagement to fighting forgetting",
          "Checking In bridges because deliberate check-in matures into spontaneous introspective awareness (the basis of Stage 4)",
        ],
      },
      {
        q: "A student complains that checking in 'keeps breaking my concentration, so I've stopped doing it — my focus is better without it.' What's wrong with this reasoning, and what are they at risk of?",
        model: "The reasoning mistakes a feature for a bug. Checking in is <em>supposed</em> to briefly disrupt focus — that momentary inward turn is the very mechanism that trains introspective awareness, and introspective awareness is half of what Stage Three develops. By dropping it to protect raw concentration, the student is optimising the wrong variable. The risk is twofold. Without the regular inward check they lose the early-warning system that catches gross distraction before it causes forgetting, so forgetting episodes will actually increase even if moment-to-moment focus feels smoother. And more insidiously, dullness is pleasant and seductive: 'better focus with no interruptions' is exactly what deepening subtle dullness feels like from the inside. They may be mistaking a quiet, dim, under-monitored mind for improved concentration. Checking in is what would reveal that. So the correction is to put it back, accept the small disruptions as the cost of building the faculty, and trust that it's laying the groundwork for the effortless self-monitoring of Stage Four.",
        rubric: [
          "Identifies that the 'disruption' is the intended mechanism, not a flaw",
          "Checking in builds introspective awareness — half the stage's goal",
          "Risk 1: loses early-warning for gross distraction → more forgetting",
          "Risk 2: may be mistaking seductive dullness for 'better focus' — checking in is what detects it",
        ],
      },
    ],
  },

  {
    n: 4,
    title: "Continuous Attention",
    subtitle: "Stage Four",
    goal: "Overcome gross distraction and strong dullness, using continuous introspective awareness.",
    train: [
      { h: "What this stage trains", p: "Overcoming <strong>gross distraction</strong> and <strong>strong dullness</strong>. Mastery: gross distractions no longer push the breath into the background, and there's no hypnagogic distortion from dullness. The engine of the stage is <em>continuous</em> introspective awareness — the deliberate check-ins of Stage Three have become automatic." },
      { h: "The two-step for gross distraction", p: "When gross distraction is present: let go gently and return to the breath; affirm the part of mind that noticed; don't worry if it lingers as subtle distraction — it will fade. Prevention is better: when a subtle distraction is gaining momentum, tighten focus on breath details <em>now</em> (following + connecting) before it goes gross." },
      { h: "Watch the mind watching the breath", p: "'Stand back' slightly from the object — keep the breath central while being peripherally aware of the mind's movements. This metacognitive introspective awareness is what lets you catch subtle-to-gross transitions as they happen. Two dangerous kinds of subtle distraction: the attractive ones that pull attention, and the ones that sneak in gradually. The goal is introspective awareness running continuously, without the interruption of deliberate check-ins." },
      { h: "Persistent pain", p: "Ignore → investigate as object → accept without resistance. Explore its qualities (sharp/aching/burning? fixed/fluctuating? one or composite?). Pain often resolves — fades, goes neutral, or becomes ignorable — once resistance drops. If it stays, use it as the meditation object; it's equally valid for developing stable attention." },
      { h: "Discursive brilliance", p: "Interesting insights and brilliant ideas are a distraction in disguise. Note it mentally; resolve to address it after the sit. If it keeps returning, label it ('thinking, thinking') and hold it briefly as object — don't analyse the content. When the intensity subsides, return to the breath." },
      { h: "Emotions, memories, visions (purification)", p: "When restlessness precedes them, invite whatever is underneath to surface. Mantra: acknowledge → allow → accept. Start by investigating the <em>bodily sensations</em> of the emotion, not its story. Then label the emotion (anxiety, grief, anger) and its quality. Don't identify — 'anger is arising,' not 'I am angry.' This is purification: the unconscious releasing material in the stillness of practice. Rejoice in it. When it passes, return to the breath and strengthen focus." },
      { h: "Overcoming strong dullness (3 steps)", p: "(1) Rouse completely with the appropriate antidote whenever strong — or progressive subtle — dullness appears. (2) Use introspective awareness to catch dullness returning before it goes strong, and apply an earlier, lighter antidote. (3) Repeat until it doesn't return. Distinguish <strong>stable</strong> subtle dullness (doesn't escalate — actually useful, keeps agitation down) from <strong>progressive</strong> subtle dullness (escalates — must be caught and corrected). If dullness returns within 3–5 minutes, you're sinking: use a much stronger antidote." },
    ],
    grill: [
      {
        q: "What is the engine that makes Stage Four work?",
        options: [
          { t: "Deliberate check-ins performed on a fixed schedule", ok: false, why: "Those belong to Stage Three; by Stage Four they've become automatic." },
          { t: "Continuous, now-automatic introspective awareness", ok: true, why: "The self-monitoring that was deliberate in Stage Three now runs continuously without interruption." },
          { t: "Exclusive single-pointed focus with no awareness of mind", ok: false, why: "Exclusive attention arrives at Stage Six; Four still keeps broad introspective awareness." },
          { t: "Counting breaths to re-stabilise after each distraction", ok: false, why: "Counting is a Stage One tool, not the mechanism of Stage Four." },
        ],
      },
      {
        q: "'Watching the mind watching the breath' refers to:",
        options: [
          { t: "Analysing the content of each distracting thought carefully as it comes up", ok: false, why: "Analysing content pulls you into the distraction; this is the opposite." },
          { t: "Metacognitive introspective awareness of attention while it rests on the breath", ok: true, why: "You stand back slightly — breath central, mind's movements in peripheral awareness — to catch transitions." },
          { t: "Splitting your attention evenly between the breath and your passing thoughts", ok: false, why: "The breath stays central in attention; the mind is watched peripherally, not 50/50." },
          { t: "Visualising a separate observer watching you from somewhere outside the body", ok: false, why: "It's not a visualisation; it's awareness of the mind's own activity." },
        ],
      },
      {
        q: "A powerful, genuinely interesting insight arises mid-sit. What's the correct handling?",
        options: [
          { t: "Follow it while it's fresh — real insight is the point of practice", ok: false, why: "'Discursive brilliance' is a distraction in disguise at this stage, however interesting." },
          { t: "Note it, resolve to address it after the sit, and return to the breath", ok: true, why: "If it persists, label it ('thinking, thinking') and hold briefly as object — but don't analyse content." },
          { t: "Analyse it thoroughly now so you don't lose the thread", ok: false, why: "Analysing the content is exactly what feeds the distraction." },
          { t: "Treat it as a sign to end the sit and write it down", ok: false, why: "You resolve to address it later, not break the session for it." },
        ],
      },
      {
        q: "When a charged emotion surfaces during practice, you should first investigate:",
        options: [
          { t: "The story and causes behind why the emotion arose", ok: false, why: "Starting with the narrative pulls you into content and identification." },
          { t: "Whether the emotion is justified by your real situation", ok: false, why: "Judging its justification is more discursive content, not the practice." },
          { t: "The bodily sensations of the emotion, before its content", ok: true, why: "Start with the felt sensations; then label the emotion and its quality, without identifying." },
          { t: "How to make the emotion go away as fast as possible", ok: false, why: "The move is acknowledge → allow → accept, not suppression — this is purification." },
        ],
      },
      {
        q: "Which description of subtle dullness needs to be caught and corrected?",
        options: [
          { t: "Stable subtle dullness that stays level and doesn't escalate", ok: false, why: "Stable subtle dullness is actually useful — it keeps agitation down and doesn't deepen." },
          { t: "Progressive subtle dullness that escalates over time", ok: true, why: "Progressive dullness deepens toward strong dullness and must be caught early and corrected." },
          { t: "The brief dullness right as you first settle into the sit", ok: false, why: "That's not the distinction TMI draws; the key split is stable vs. progressive." },
          { t: "Any dullness at all, since all dullness is harmful", ok: false, why: "Not all — stable subtle dullness has a legitimate calming use." },
        ],
      },
      {
        q: "Your correct response to a charged emotion arising is captured by which mantra?",
        options: [
          { t: "Resist, suppress, move on", ok: false, why: "Suppression is the opposite of purification; the material needs to be allowed." },
          { t: "Acknowledge, allow, accept", ok: true, why: "You let the unconscious release material in the stillness — acknowledge it, allow it, accept it, and rejoice." },
          { t: "Analyse, explain, resolve", ok: false, why: "Analysing content keeps you in the story rather than processing the release." },
          { t: "Label, judge, dismiss", ok: false, why: "You label without judging or dismissing — it's welcomed as purification." },
        ],
      },
    ],
    open: [
      {
        q: "Stage Four is where 'purification' — charged emotions, memories, sometimes visions — often surfaces. Walk through how TMI says to work with a strong emotion that arises mid-sit, and explain why the instruction to start with bodily sensations (not the story) matters.",
        model: "The sequence is acknowledge → allow → accept. When restlessness heralds something coming up, you actively invite whatever's underneath to surface rather than bracing against it. Then you start by investigating the <em>bodily sensations</em> of the emotion — where it sits, its texture, intensity — before touching its content. Only after that do you label the emotion and its quality (anxiety, grief, anger; intense, vague), and crucially without identifying: 'anger is arising,' not 'I am angry.' When it passes or becomes ignorable, return to the breath and strengthen focus. Starting with bodily sensations matters for several reasons. The story is the hook — engage the narrative and you're instantly pulled into discursive thought and re-identification, which re-energises the emotion and defeats the processing. The felt sense, by contrast, can be observed as an object with some equanimity, which is what lets the material move through and release rather than loop. It also keeps the work experiential rather than analytical — this is purification, the unconscious discharging material in the stillness of practice, and that discharge happens through allowing and feeling, not through explaining. Framing it as something to rejoice in, and holding non-identification, keeps the observing mind stable while the release completes.",
        rubric: [
          "Sequence: acknowledge → allow → accept (invite it up rather than suppress)",
          "Start with bodily sensations, THEN label emotion + quality",
          "Non-identification: 'anger is arising' not 'I am angry'",
          "Explains WHY body-first: the story re-hooks/re-identifies; felt sense can be held with equanimity; it's purification, not analysis",
        ],
      },
      {
        q: "Both Stage Three and Stage Four deal with distraction and dullness. What genuinely changes between them — what makes Four a distinct stage rather than just 'more of Three'?",
        model: "The change is in what has become automatic and what level of obstacle is being targeted. In Stage Three, introspective awareness is still <em>deliberate</em> — you check in on purpose every few breaths, and that act briefly interrupts focus. In Stage Four, that self-monitoring has matured into <em>continuous, automatic</em> introspective awareness running in the background without interruption — 'watching the mind watching the breath.' That continuity is what makes the stage possible. Second, the target obstacles are the stronger forms: Stage Three works on forgetting and ordinary distraction and the slide toward sleep; Stage Four specifically overcomes <em>gross</em> distraction (so it no longer pushes the breath into the background) and <em>strong</em> dullness (no more hypnagogic distortion). Because the monitoring is now continuous, you can catch subtle-to-gross transitions as they happen and intervene early — prevention by tightening on breath details before a subtle distraction goes gross — rather than only reacting after the fact. So Four isn't more effort of the same kind; it's the point where the self-monitoring faculty built in Three runs on its own, which in turn lets you defeat the grosser obstacles continuously rather than episodically.",
        rubric: [
          "Stage 3 introspective awareness = deliberate/interrupting; Stage 4 = continuous/automatic",
          "Target shifts to GROSS distraction and STRONG dullness specifically",
          "Continuity enables catching subtle→gross transitions early (prevention)",
          "Frames Four as the faculty running on its own, not just more effort",
        ],
      },
    ],
  },

  {
    n: 5,
    title: "Overcoming Subtle Dullness",
    subtitle: "Stage Five",
    goal: "Overcome subtle dullness and increase the power of mindfulness.",
    train: [
      { h: "What this stage trains", p: "Overcoming <strong>subtle dullness</strong> and increasing the <em>power</em> of mindfulness. The central danger: subtle dullness is pleasant, seductive, and creates a convincing illusion of stable attention — it's easily mistaken for Stage Six. Mastery: consistently sustaining and increasing mindfulness intensity throughout each session." },
      { h: "Three characteristics of subtle dullness", p: "(1) Loss of vividness — breath sensations less sharp, fine details unclear. (2) Fading peripheral awareness — sounds and bodily sensations recede, fewer thoughts, comfort/ease dominates introspection. (3) A pleasant feeling — warm, soft, quiet pleasure (as opposed to the bright, alert pleasure of 'flow'). Warning: subtle dullness can masquerade as Stage Six exclusive focus (distractions fade) and even as early Stage 7/8 joy. It is a dead end." },
      { h: "Detecting it", p: "Involuntary signals: a startle, an unexpected deep breath, correcting a slumping posture — then retrospectively examine the quality of mind just before. Comparison check-ins: is this sit as sharp as your sharpest? are you as clear as you were twenty minutes ago? Post-sit sign: feeling sluggish or spacey afterward means you were probably in subtle dullness. Learn to distinguish the dim pleasure of dullness from the bright, alert pleasure of mindfulness." },
      { h: "Countering it", p: "Hold the intention to observe the breath clearly and vividly, with as much intensity as possible. Use following and connecting — especially connecting breath changes to shifts in alertness/dullness. Intentionally expand the scope of attention to include body sensations: a larger 'conscious area' energises the mind. Beware spontaneous scope expansion, though — it can disguise deepening dullness, so always check inward if scope expands on its own. Never rely on merely <em>feeling</em> alert; examine the actual quality of attention and awareness." },
      { h: "Body scanning (the primary method)", p: "Use it when subtle distractions are manageable and perception is fairly clear. Shift attention to the abdomen; observe breath-related sensations there until stable. Move to a distant part (e.g. a foot); explore all sensations, looking for any that change with the breath, keeping the abdomen in peripheral awareness. Progress systematically, small areas to large (foot → leg → both legs → torso → arms → whole body). Expand scope back and forth — one finger, then the whole arm — intending equal vividness in both. When perception sharpens noticeably, return to the breath at the nose and notice how much more vivid it is. Sustain it; when it fades, scan again." },
      { h: "The real point of the scan", p: "Finding breath-related sensations everywhere (prana / inner winds) is a bonus — the real goal is the mental <em>sharpening</em> that comes from the search itself. Don't scan immediately after sitting down (the mind will fatigue), and always return to the nose as the primary object." },
      { h: "When to move on", p: "Don't wait for full mastery. Begin Stage Six whenever you have extended periods of high alertness and powerful mindfulness." },
    ],
    grill: [
      {
        q: "Why is subtle dullness considered the central danger of Stage Five?",
        options: [
          { t: "It is physically painful and disrupts the posture badly", ok: false, why: "It's the opposite of painful — it's pleasant, which is exactly what makes it dangerous." },
          { t: "It is pleasant and seductive and mimics stable attention", ok: true, why: "Its convincing illusion of stability gets it mistaken for Stage Six — a dead end you can park in for years." },
          { t: "It causes the meditator to fall fully asleep quickly", ok: false, why: "That's strong dullness/drowsiness; subtle dullness keeps you 'functioning' but dim." },
          { t: "It produces frightening hypnagogic imagery and visions", ok: false, why: "Hypnagogic distortion is a strong-dullness feature; subtle dullness is quiet and comfortable." },
        ],
      },
      {
        q: "Which set correctly names the three characteristics of subtle dullness?",
        options: [
          { t: "Sharper vividness, heightened awareness, and neutral feeling", ok: false, why: "All three are reversed — dullness loses vividness and awareness, and feels pleasant, not neutral." },
          { t: "Loss of vividness, fading peripheral awareness, and a pleasant feeling", ok: true, why: "Details dim, the periphery recedes, and a soft warm pleasure sets in — the classic triad." },
          { t: "Racing thoughts, bodily agitation, and rising anxiety", ok: false, why: "That's agitation, the opposite pole — subtle dullness is quiet and comfortable." },
          { t: "Loss of vividness, sharper peripheral awareness, and mild discomfort", ok: false, why: "Peripheral awareness fades (not sharpens) and the feeling is pleasant (not uncomfortable)." },
        ],
      },
      {
        q: "The pleasure of subtle dullness differs from the pleasure of strong mindfulness in that it is:",
        options: [
          { t: "Bright, alert, and energising — a 'flow' quality", ok: false, why: "That describes the pleasure of mindfulness, not of dullness." },
          { t: "Warm, soft, and quiet — a dim, comfortable quality", ok: true, why: "Dullness's pleasure is soft and dim; learning to tell it from bright alert pleasure is the skill." },
          { t: "Sharp and slightly painful, like intense concentration", ok: false, why: "Dullness isn't sharp or painful; it's comfortable and vague." },
          { t: "Identical — pleasure feels the same whatever its source", ok: false, why: "The whole detection skill rests on these two pleasures feeling different." },
        ],
      },
      {
        q: "If your scope of attention expands <em>spontaneously</em> during a sit, you should:",
        options: [
          { t: "Welcome it as a sign of deepening concentration", ok: false, why: "Spontaneous expansion can actually disguise deepening dullness — don't take it at face value." },
          { t: "Check inward, because it may be disguising deepening dullness", ok: true, why: "Spontaneous scope expansion is a known mask for dullness; always verify the quality of mind." },
          { t: "Immediately narrow back to a single point on the breath", ok: false, why: "Narrowing isn't the response; verifying whether dullness is present is." },
          { t: "Ignore it, since scope changes don't matter at this stage", ok: false, why: "Scope changes matter a lot here — deliberate expansion energises, spontaneous expansion may mask dullness." },
        ],
      },
      {
        q: "What is the <em>real</em> goal of body scanning in Stage Five?",
        options: [
          { t: "To locate prana and inner-wind sensations throughout the body", ok: false, why: "Finding those is a bonus, not the aim — don't mistake the by-product for the point." },
          { t: "To relax the body thoroughly before deepening concentration", ok: false, why: "Relaxation isn't the purpose; mental sharpening is." },
          { t: "The mental sharpening produced by the search itself", ok: true, why: "The act of searching for subtle sensations is what increases the power of mindfulness." },
          { t: "To map which body parts move most with the breath", ok: false, why: "Mapping isn't the objective; the heightened perception you carry back to the nose is." },
        ],
      },
      {
        q: "A reliable retrospective sign that you were in subtle dullness is:",
        options: [
          { t: "Feeling sharp and energised for hours after the sit", ok: false, why: "That points to genuine mindfulness, not dullness." },
          { t: "A clear, detailed memory of the whole session", ok: false, why: "Vivid recall suggests the mind was bright, not dim." },
          { t: "Feeling sluggish or spacey after the session ends", ok: true, why: "Post-sit sluggishness or spaciness is a classic sign you'd been dim without noticing." },
          { t: "Having sat noticeably longer than you intended to", ok: false, why: "Sit length isn't a dullness marker by itself." },
        ],
      },
    ],
    open: [
      {
        q: "Stage Five's subtle dullness is notorious for masquerading as attainment. Explain exactly <em>what</em> it can be mistaken for and why the illusion is so convincing — then give the practical ways TMI says to detect it, since by definition you can't rely on how alert you feel.",
        model: "Subtle dullness can masquerade as Stage Six exclusive focus and even as early Stage 7/8 joy. The illusion is convincing because of what subtle dullness actually does: distractions fade and the mind goes quiet (which looks like the exclusive, distraction-free attention of Stage Six), peripheral chatter recedes, and a warm, soft, pleasant feeling sets in (which can be misread as meditative joy). From the inside it feels stable, peaceful, and pleasant — exactly the markers a meditator is hoping for — so there's every incentive to believe you've arrived, and people can park in this dead end for years. The catch is that you can't trust the feeling of alertness, because dullness dims the very faculty that would judge alertness. So TMI gives external and comparative checks instead. Involuntary signals: a startle, an unexpected deep breath, or catching yourself correcting a slump — any of these is a cue to retrospectively examine the quality of mind just before it. Comparison check-ins: ask whether this sit is as sharp as your sharpest, or whether you're as clear now as you were twenty minutes ago — relative judgements you can make even when absolute self-assessment is compromised. And the post-sit sign: feeling sluggish or spacey afterward means you were probably dim during the sit. Underneath all of them is learning to distinguish the dim, soft pleasure of dullness from the bright, alert pleasure of mindfulness — the single discrimination the whole stage turns on.",
        rubric: [
          "Mistaken for Stage 6 exclusive focus AND early Stage 7/8 joy",
          "Why convincing: distractions fade (looks like exclusivity) + pleasant warm feeling (looks like joy) + feels stable",
          "Can't trust felt alertness because dullness dims the judging faculty itself",
          "Detection methods: involuntary signals (startle/deep breath/posture) → examine retrospectively; comparison check-ins (vs sharpest / vs 20 min ago); post-sit sluggishness",
          "The core discrimination: dim soft pleasure vs bright alert pleasure",
        ],
      },
      {
        q: "There's an apparent paradox in Stage Five: expanding the scope of attention is the main tool for <em>countering</em> dullness, yet scope expansion can also be a <em>symptom</em> of dullness. Resolve it — how do you use expansion as a remedy without being fooled by it?",
        model: "The resolution is in the word <em>intentional</em>. Deliberately expanding the scope of attention — including body sensations, working with a larger 'conscious area' — energises the mind: it demands more of the attentional system, which raises the power of mindfulness and counters dullness. That's why body scanning (systematically moving and widening the field, intending equal vividness in small and large areas) is the primary Stage Five method. The danger is the other direction: when scope expands <em>spontaneously</em>, on its own, without you driving it, that can be dullness deepening and disguising itself — the field going soft and wide because vividness is draining, not because mindfulness is growing. So the two aren't contradictory; they're distinguished by agency and by what's happening to vividness. The practical rule is: expansion you deliberately generate, while actively intending clear and vivid perception, is a remedy. Expansion that happens by itself is a flag — always check inward when scope widens on its own, and examine the actual quality of attention rather than trusting that 'wider' means 'better.' In short, drive the expansion yourself and keep vividness as the non-negotiable; never let a pleasant broadening substitute for actual clarity.",
        rubric: [
          "Deliberate/intentional expansion = remedy (energises mind, raises mindfulness; basis of body scan)",
          "Spontaneous expansion = possible symptom (dullness disguising itself as vividness drains)",
          "Distinguished by agency (who's driving) and by what happens to vividness/clarity",
          "Practical rule: check inward when scope expands on its own; never trust 'wider' as 'better' — hold vividness as non-negotiable",
        ],
      },
    ],
  },

  {
    n: 6,
    title: "Subduing Subtle Distractions",
    subtitle: "Stage Six",
    goal: "Subdue subtle distractions; develop metacognitive introspective awareness.",
    train: [
      { h: "What this stage trains", p: "Subduing <strong>subtle distractions</strong> and developing <strong>metacognitive introspective awareness</strong>. The obstacle: attention still continuously alternates to a stream of subtle mental objects in peripheral awareness. Mastery: subtle distractions almost entirely absent — unwavering exclusive attention with vivid mindfulness." },
      { h: "Exclusive attention (step 1)", p: "Definition: attention never alternates to subtle distractions — they remain only in peripheral awareness. Method: clearly define and stabilise your scope of attention, then completely ignore everything outside it. Conscious intention is key — intend to observe all the fine details of the object AND intend to ignore everything else. Any attention given to a distraction gives it energy to continue, so give it none." },
      { h: "Until distractions fade (step 2)", p: "When exclusive attention is consistently sustained, the mental objects projected into consciousness decrease dramatically. Thought processes continue unconsciously but stop appearing in consciousness once they consistently fail to get attention. This is the beginning of pacifying the mind — it requires constant vigilance and effort to maintain." },
      { h: "Whole body with the breath (the key technique)", p: "Builds on the Stage Five scan but with crucial differences: (1) define the scope of attention much more precisely; (2) focus <em>exclusively</em> on breath-related sensations only — everything else excluded from attention (not from awareness); (3) expand until the whole body is the object simultaneously. Attend to the breath at the abdomen, shift to a part (e.g. a hand) and refine to breath sensations there only, move to another part, then expand progressively — larger and larger areas, alternating small and large, equal vividness in all — until the entire body is included at once, leaving no bandwidth for distractions. Then return to the nose; a brief period of exclusive attention follows automatically. When it fades, repeat." },
      { h: "Metacognitive introspective awareness", p: "'Meta'-cognitive = awareness of the mind itself, from a higher perspective. Being metacognitively aware of mental <em>activities</em>: knowing where attention is directed, how it's moving, its vividness and clarity, whether scope is stable, and what's arising and passing in peripheral awareness. Being metacognitively aware of mind <em>state</em>: knowing your predominant emotion, hedonic tone, intentions, and degree of alertness or dullness — whether you're patient or annoyed, focused or scattered, grasping or equanimous. Hold the intention to observe both, continuously, while sustaining exclusive attention." },
      { h: "Whole-body jhāna (optional but valuable)", p: "Object: all breath-related sensations throughout the whole body at once. Precondition is 'access concentration' — exclusive focus plus joy plus pleasure. When present, the mind 'slips into a groove,' a recognisable shift into flow: the first whole-body jhāna. Unlike the Stage Five practice, you <em>stay</em> with the whole-body object. Caution: if attention drifts to the pleasure and awareness fades, abandon the jhāna immediately — metacognitive awareness must remain." },
      { h: "Seven conditions for flow (Csíkszentmihályi)", p: "Activity as an end in itself; clear goals with immediate feedback of success; challenge matched to skill; complete focus with no room for irrelevant thought; a spontaneous, automatic quality with no separate self; effortlessness despite skilled performance; and a sense of exercising control (not feeling 'in control,' but of successfully doing)." },
    ],
    grill: [
      {
        q: "What does 'exclusive attention' actually mean in Stage Six?",
        options: [
          { t: "Attention so narrow it excludes all peripheral awareness", ok: false, why: "Peripheral awareness must stay vivid — that's mindfulness. Only <em>attention</em> becomes exclusive, not awareness." },
          { t: "Attention that never alternates to subtle distractions", ok: true, why: "Distractions stay in peripheral awareness but attention no longer flicks to them — it stays on the object." },
          { t: "The ability to attend to several objects at once", ok: false, why: "It's the opposite — attention stops dividing and alternating, resting exclusively on the chosen object." },
          { t: "Attention that excludes physical sensations entirely", ok: false, why: "In whole-body practice the body <em>is</em> the object; it's distractions that are excluded, not the body." },
        ],
      },
      {
        q: "Why must you give a subtle distraction no attention at all?",
        options: [
          { t: "Because noticing it at all breaks the meditative state", ok: false, why: "You can be peripherally aware of it fine; it's giving it <em>attention</em> that's the problem." },
          { t: "Because any attention gives it energy to continue", ok: true, why: "Attention is what sustains a mental process; withhold it consistently and the process stops reaching consciousness." },
          { t: "Because distractions are always signs of dullness", ok: false, why: "Subtle distraction and dullness are different obstacles; this is about not feeding the distraction." },
          { t: "Because you should suppress all thought at this stage", ok: false, why: "You don't suppress — thoughts continue unconsciously; you simply stop attending to them." },
        ],
      },
      {
        q: "How does the Stage Six 'whole body with the breath' differ from the Stage Five body scan?",
        options: [
          { t: "It scans the body much faster and skips the abdomen as a starting point", ok: false, why: "Speed isn't the difference, and you still start at the abdomen." },
          { t: "It attends to all the body's sensations, not just the breath-related ones", ok: false, why: "Reversed — Stage Six restricts attention to breath-related sensations <em>only</em>." },
          { t: "Scope is defined more precisely, breath-only, expanding to the whole body at once", ok: true, why: "Precise scope, exclusive focus on breath sensations, building to the entire body simultaneously." },
          { t: "It abandons peripheral awareness entirely to achieve a single exclusive focus", ok: false, why: "Peripheral awareness is kept; only attention is made exclusive." },
        ],
      },
      {
        q: "'Metacognitive introspective awareness' is best described as awareness of:",
        options: [
          { t: "The breath sensations themselves in ever-finer, microscopic detail", ok: false, why: "That's close following of the object, not meta-awareness of the mind itself." },
          { t: "The external environment and the sounds in the room around you", ok: false, why: "That's extrospective awareness; metacognitive awareness is directed at the mind." },
          { t: "The mind itself — its activities and its state — from a higher perspective", ok: true, why: "Knowing where attention is and how it moves, plus your emotional tone, alertness, and intentions." },
          { t: "Your own long-term progress and movement across the ten stages", ok: false, why: "It's moment-to-moment awareness of the present mind, not a progress review." },
        ],
      },
      {
        q: "What is the precondition ('access concentration') for entering whole-body jhāna?",
        options: [
          { t: "Exclusive focus together with joy and pleasure", ok: true, why: "When exclusive attention is joined by joy and pleasure, the mind can 'slip into the groove' of flow." },
          { t: "Complete absence of any peripheral awareness", ok: false, why: "Awareness must remain — losing it is cause to abandon the jhāna, not enter it." },
          { t: "Several hours of continuous daily sitting first", ok: false, why: "It's a quality of mind in the sit, not a quota of hours." },
          { t: "Total cessation of all bodily sensation", ok: false, why: "The whole body of breath sensations is the object — sensation isn't gone." },
        ],
      },
      {
        q: "While in whole-body jhāna, attention drifts onto the pleasure and your awareness starts to fade. You should:",
        options: [
          { t: "Stay with it — the pleasure deepening is the goal of jhāna", ok: false, why: "Sinking into pleasure while awareness fades is exactly the failure mode to avoid." },
          { t: "Narrow attention back to the breath at the nose only", ok: false, why: "The issue isn't the object; it's that metacognitive awareness is being lost." },
          { t: "Abandon the jhāna immediately, since awareness must remain", ok: true, why: "Metacognitive awareness is non-negotiable — if it's fading, drop the jhāna rather than lose it." },
          { t: "Deliberately intensify the pleasure to push through", ok: false, why: "Amplifying the pleasure accelerates the loss of awareness — the opposite of what's needed." },
        ],
      },
    ],
    open: [
      {
        q: "A core subtlety of Stage Six: attention becomes <em>exclusive</em>, yet peripheral awareness must stay <em>vivid</em>. Explain how these coexist, why collapsing awareness into attention would be a failure, and what role metacognitive introspective awareness plays in holding the two together.",
        model: "They coexist because attention and peripheral awareness are different functions, not two amounts of one thing. Exclusive attention means attention stops alternating to subtle distractions and rests fully on the object — but the distractions and the rest of the field don't vanish; they remain present in <em>peripheral awareness</em>. So 'exclusive' qualifies only where attention goes, not how wide consciousness is. Collapsing awareness into attention — narrowing until the periphery goes dark — would be a failure for two reasons. First, vivid peripheral awareness <em>is</em> mindfulness; lose it and you've traded mindfulness for mere concentration, which is precisely the slide toward dullness (a dim, narrow, 'exclusive-feeling' mind is exactly what subtle dullness counterfeits). Second, you need the periphery to monitor the very distractions you're declining to attend to, and to keep the breath-field (in whole-body practice) present as object. Metacognitive introspective awareness is what holds the two together: it's awareness of the mind itself — where attention is directed, how it's moving, its vividness and scope stability, plus the mind's state (alert or dull, grasping or equanimous). By continuously observing both the activities and the state of mind <em>while</em> exclusive attention is sustained, it functions as the governor that keeps attention exclusive without letting awareness collapse — catching the moment vividness starts to drain or attention starts to flick away, so you can correct before either exclusivity or mindfulness is lost.",
        rubric: [
          "Attention and peripheral awareness are different functions — 'exclusive' limits attention's alternating, not the width of consciousness",
          "Distractions remain in peripheral awareness; attention simply stops going to them",
          "Collapsing awareness = losing mindfulness = the slide to dullness (which counterfeits exclusive focus)",
          "Need periphery to monitor distractions / hold the object field",
          "Metacognitive awareness = awareness of mind's activities + state; acts as governor holding both together",
        ],
      },
      {
        q: "Trace how a single technique — attending to the breath in the body — evolves across Stages Five and Six (body scan → whole-body-with-breath), and explain what that progression is actually accomplishing at each step.",
        model: "The same raw move — putting attention on breath sensations in the body — is deployed for two different jobs as it evolves. In Stage Five, the body scan's job is to <em>increase the power of mindfulness</em> and defeat subtle dullness. You move attention through the body hunting for sensations, including any that change with the breath, expanding and contracting scope (a finger, then the whole arm) while intending equal vividness in both. The real yield isn't the sensations found (prana/inner winds are a bonus) but the mental <em>sharpening</em> produced by the act of searching — and you return to the nose to cash in that heightened vividness. In Stage Six, the same bodily attention is retooled for a different job: establishing <em>exclusive attention</em> and subduing subtle distraction. Three things tighten. The scope is defined much more precisely. The focus becomes exclusive to breath-related sensations only — everything else excluded from attention (though not from awareness). And you expand progressively until the <em>whole body at once</em> is the object. The accomplishment there is that a whole-body breath object leaves no bandwidth for subtle distractions — it fills attention so completely that distractions can't get a foothold — temporarily subduing them, after which returning to the nose yields a spontaneous stretch of exclusive attention. So the progression runs: Stage Five uses bodily attention to make the mind <em>brighter</em> (power of mindfulness up, dullness down); Stage Six uses a refined, exclusive, whole-body version to make attention <em>unwavering</em> (subtle distraction down), with whole-body-with-breath becoming, at its peak, the object of whole-body jhāna.",
        rubric: [
          "Stage 5 body scan's job: increase power of mindfulness / defeat subtle dullness; real yield is mental sharpening from the search (sensations are a bonus)",
          "Return to nose to cash in heightened vividness",
          "Stage 6 retools it: more precise scope, exclusive to breath-sensations only, whole body at once",
          "Stage 6 accomplishment: whole-body object leaves no bandwidth → subdues subtle distraction → spontaneous exclusive attention",
          "Captures the arc: brighter mind (5) → unwavering attention (6), peaking in whole-body jhāna",
        ],
      },
    ],
  },
];
