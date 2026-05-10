# Ontoapp — Requirements Clarification & Corrections

**Author:** Mary, Business Analyst  
**Date:** 2026-05-10  
**Purpose:** Close all gaps identified in requirements validation. This document supersedes vague or incomplete statements in the PRD and provides precise, measurable criteria ready for development.

---

## 1. Functional Requirements — Clarified & Measured

### FR1: Morning Embodied Ritual

**Clarified Statement:**
The app must offer a morning ritual flow that guides the user through a structured presence exercise. The ritual consists of three sequential phases: (1) calm entry and intention setting, (2) breathing or body awareness transition with soft guidance, (3) audio capture and personalized prompt generation.

#### Phase 1: Ritual Entry (Story 1.1)

**Duration:** ≤ 1 minute of intro content

**Acceptance Criteria:**
- The entry screen displays a single call-to-action: "Begin Ritual" (not multiple options)
- The screen uses warm, neutral colors and minimal text (max 20 words describing the ritual)
- The user can tap "Begin," "Not now," or return via back gesture without pressure
- No countdown timers or urgency language

**Specific Language Rules (Privacy & Calm):**
- ❌ Avoid: "Complete your ritual," "Streak:" "Daily goal"
- ✅ Use: "Begin when ready," "Arrive in your body," "If you wish"

#### Phase 2: Transition (Story 1.2)

**Duration:** Fixed 1 minute 30 seconds; skippable

**Acceptance Criteria:**
- The app plays soft audio guidance or displays breath-count visuals (one animation cycle = 4-second breath)
- After 90 seconds, the app auto-advances to recording phase without user input required
- User can tap "Skip" at any time to move directly to audio recording
- No pressure language; the transition is optional but recommended

**Technical Detail:**
- If audio guidance is used, play it at 40–50 dB (quiet, non-intrusive)
- If visual guidance: use a simple circle that expands/contracts with breathing cadence

#### Phase 3: Audio Capture & Prompt (Story 1.3)

**Audio Specifications:**
- Target duration: 20–30 seconds (user can record 10–60 seconds)
- Minimum amplitude threshold: -20 dB (prevent silent recordings)
- Maximum file size: 2 MB (uncompressed)
- Supported formats: MP3, AAC, WAV

**If audio is too quiet or silence:**
- ✅ Show a gentle prompt: "Your recording was quiet. Speak closer to the microphone if you'd like to try again."
- User choice: Re-record, use generic fallback prompt, or skip ritual

**Prompt Generation:**
- **Local heuristics:** Extract keywords, tone, and pace from audio; generate prompt from 20 templated options
- **Cloud option (optional, consent-required):** Send only audio duration, detected mood (low/neutral/energized), keyword count; receive tailored prompt
- **Fallback:** If generation fails or user opts out, use one of 10 evergreen prompts (e.g., "What does your body need right now?")

**Prompt Quality Bar:**
- Prompt length: 1–2 sentences
- Prompt tone: Invitational, not prescriptive (e.g., ✅ "Explore where you feel most present" vs. ❌ "Complete 5 minutes of journaling")
- Relevance: Prompt must reference the audio context OR explicitly be a fallback (labeled "Since we couldn't personalize it, here's an invitation...")

**Acceptance Criteria:**
- [ ] Audio is captured locally (not sent without consent)
- [ ] Prompt is displayed within 3s (local) or 10s (cloud) with loading indicator
- [ ] If timeout occurs, fallback prompt is shown automatically
- [ ] User can proceed to reflection or repeat ritual
- [ ] Ritual is marked complete and updates balance state to +1 Body

---

### FR2: Internal Dialogue Capture

**Clarified Statement:**
The app must allow users to record text-based nightly reflections that capture their internal dialogue. The reflection should be available in two modes: **Saved** (persistent, metadata tracked) or **Ephemeral** (temporary processing, auto-deleted).

#### Entry Flow (Story 2.1)

**UI Affordances:**
- Single large text field with minimum 8 lines visible
- Placeholder text (max 10 words): "What's on your mind right now?" or "Write what feels true"
- Character limit: 2,000 characters (enforced, with counter visible at 1,500+)

**Acceptance Criteria:**
- [ ] Entry screen has no prompts or suggestions visible by default
- [ ] User can request prompts via an optional "Inspiration" button
- [ ] Text is saved as draft every 10 seconds (shown as "Auto-saved")
- [ ] User can discard draft or submit

#### Authenticity Prompts (Story 2.2)

**Concrete Prompt Library (10 prompts; randomize 2 per session):**

| Prompt | Purpose |
|--------|---------|
| What am I saying to myself right now? | Name the story |
| What would it feel like to admit the truth here? | Access authenticity |
| Where am I playing it safe? | Identify avoidance |
| What do I actually want (not what I should want)? | Clarity |
| What am I avoiding by staying busy? | Notice the cost |
| If I were completely honest, what's missing? | Vulnerability |
| What belief am I protecting right now? | Self-awareness |
| Where do I feel stuck between two truths? | Paradox |
| What would change if I stopped justifying? | Consequence |
| Who would I be without this story? | Imagination |

**Prompt Display:**
- Show exactly 2 prompts side-by-side as cards
- User can tap either to insert it as a starting point OR use as inspiration
- User can request new pairs (max 3 times per session)

**Acceptance Criteria:**
- [ ] Prompts avoid productivity language (no "Goals," "Habits," "Track")
- [ ] Prompts avoid judgment (no "Should," "Better," "Wrong")
- [ ] Prompts tested with 5+ users for clarity and resonance

#### Ephemeral vs. Saved Mode (Stories 2.3, 2.2, 2.4)

**Before submission, user chooses:**

| Mode | Behavior | Metadata Kept |
|------|----------|---------------|
| **Saved** | Text stored locally with timestamp, used by balance engine | Date, time, category, character count |
| **Ephemeral** | Text is processed in memory, not persisted to disk | Date, time, category only (no text) |

**Processing:**
- Both modes: Extract keywords, assign category (Body/Mind/Purpose), update balance state
- Ephemeral: After extraction, delete text from memory and local storage; purge within 1 session end
- Saved: Encrypt on disk; keep indefinitely unless user deletes

**Acceptance Criteria (AC per Story 2.3, 2.4):**
- [ ] UI shows clear label: "This entry will not be saved" (ephemeral) or "This entry will be saved" (saved)
- [ ] Ephemeral entries do NOT appear in any history or review
- [ ] User can switch modes at submission time (not locked in at entry start)
- [ ] Metadata is stored consistently for balance engine regardless of mode
- [ ] User can view and delete any saved entry from a dedicated archive

---

### FR3: Existential Interruption

**Clarified Statement:**
The app detects lightweight signals of probable autopilot behavior and offers a gentle, optional interruption with choice-driven prompts. Interruptions are throttled, locally triggered, and explicitly explainable to the user.

#### Autopilot Detection Heuristics (Story 3.1)

**Three concrete signals (user can toggle each independently in settings):**

| Signal | Definition | Threshold | Confidence |
|--------|------------|-----------|-----------|
| **App Idle** | Time spent in Ontoapp without interaction | > 5 min, no scroll/tap | 60% confidence of autopilot |
| **Repeated Gesture** | Same gesture (tap/swipe) in same screen area | > 8 times in 3 min | 70% confidence |
| **Session Duration** | Time in any other app without change | > 20 min continuous | 50% confidence |

**Throttling & Rate Limits:**
- Maximum 1 interruption per 30-minute window
- Maximum 3 interruptions per 24-hour period
- Quiet hours: 9 PM – 8 AM (no interruptions unless user initiates)
- User dismissal cooldown: If user dismisses 2x in a row, pause interruptions for 6 hours

**Acceptance Criteria (AC per Story 3.1):**
- [ ] Only ONE signal triggers an interruption (not cumulative)
- [ ] Interruption overlay is lightweight (max 1/4 screen, not full-screen modal)
- [ ] Overlay does NOT pause the background app or lock navigation
- [ ] Overlay includes a clear close (X) button and is dismissible with back gesture
- [ ] All signal detection happens locally; no external telemetry sent without consent

#### Interruption Prompts (Story 3.2)

**Choice-Driven Prompt Structure:**
When interruption triggers, show 2 randomly selected prompts from this library:

| Avoidance Category | Prompt 1 | Prompt 2 |
|------------------|----------|----------|
| **Distraction** | "I notice you've been in the same scroll for a while. Curious?" | "Want to pause and notice what's calling for your attention?" |
| **Avoidance** | "What might you be avoiding right now?" | "Is there something here you want to face?" |
| **Transition** | "This feels like a good moment to arrive. Interested?" | "Your body might appreciate a breath. Try it?" |
| **Rest** | "Noticing you've been moving fast. Pause for a moment?" | "What would it feel like to stop for 10 seconds?" |

**Acceptance Criteria (AC per Story 3.2):**
- [ ] Each prompt is one sentence, max 15 words
- [ ] Prompts use question form (invitation, not demand)
- [ ] Prompts avoid accusatory language (no "You are," "You should")
- [ ] User choice options: "Yes, let's talk," "Not now, later," "Close this"

#### Response Logging (Story 3.3)

**What gets recorded:**

| User Choice | Signal Recorded | Effect on Balance Engine |
|-------------|-----------------|--------------------------|
| "Yes, let's talk" | engagement: true | +1 Purpose (choosing over autopilot) |
| "Not now, later" | engagement: false, deferral: true | +0.5 Purpose (acknowledged, chose to defer) |
| "Close this" | engagement: dismissed | +0 (signal recorded, no balance change) |

**Acceptance Criteria (AC per Story 3.3):**
- [ ] Responses are stored locally only; no external send
- [ ] Each response is timestamped
- [ ] Engagement patterns influence the recommendation engine's next suggested focus
- [ ] User can view their engagement history in settings (optional feature, privacy-respecting)

---

### FR4: Centro de Gravidade (Balance Engine)

**Clarified Statement:**
The balance engine tracks user inputs across Body, Mind, and Purpose pillars, maintains a running state, and generates focus recommendations based on underrepresented areas.

#### Input Categorization Rules (Story 4.1)

**Every input is classified into exactly ONE pillar:**

| Input Type | Classification | Rule |
|-----------|----------------|------|
| **Morning ritual completion** | Body | Always. Ritual = embodiment signal. |
| **Evening reflection text** | Depends on content analysis | If text mentions physical sensation, energy, or movement → Body. If text mentions thoughts, beliefs, clarity → Mind. If text mentions meaning, values, purpose → Purpose. |
| **Interruption engagement** | Purpose | Always. Engaging with an interruption = choosing consciousness over autopilot. |
| **Interruption deferral** | Purpose (half-weight) | Acknowledging interruption and choosing to defer = mild Purpose signal. |

**Text classification example:**
- User writes: *"I spent the day rushing from meeting to meeting. My shoulders hurt."* → Body (physical sensation) + Purpose (energy misalignment) = Primary: Body
- User writes: *"I keep telling myself I'm doing fine, but I'm not being honest about how lost I feel."* → Mind (self-story) + Purpose (values misalignment) = Primary: Mind

**If ambiguous:** Default to Mind (thought/reflection is always valuable).

#### Balance State Model (Story 4.1)

**State Representation:**
- Each pillar has a score: 0–10 (rolling average over last 7 days)
- Score is updated each time input is categorized
- Formula: `new_score = (old_score × 0.7) + (input_signal × 0.3)`
  - This creates a decay; old inputs matter less over time
  - A single input can only shift the score by 3 points max

**Acceptance Criteria (AC per Story 4.1):**
- [ ] Balance state is recalculated after every input (ritual, reflection, interruption response)
- [ ] Scores decay naturally; if user does no Body inputs for 7 days, Body score drifts toward 0
- [ ] Balance state persists locally; user can view current scores in a settings panel (optional transparency feature)
- [ ] No notification or pressure when a pillar is low (just influences recommendations)

#### Recommendation Logic (Story 4.2)

**Recommendation Algorithm:**
1. Identify the pillar with the lowest score
2. If lowest is Body and score < 3: Recommend "Begin the morning ritual"
3. If lowest is Mind and score < 3: Recommend "Spend time reflecting tonight"
4. If lowest is Purpose and score < 3: Recommend "Write about what matters to you"
5. If all pillars are high (> 7): Show a balanced state message instead of a recommendation

**Recommendation Card UI (Story 4.2):**
- Appears on home screen after first input
- Shows recommended pillar + reason (non-technical, user-friendly)
- Example: *"Your reflection practice has been strong. Your body might appreciate some attention. Would you like to begin the morning ritual?"*
- User can tap to start recommended flow OR dismiss card

**Acceptance Criteria (AC per Story 4.2):**
- [ ] Recommendation changes daily (recalculated each app session)
- [ ] Recommendation language is warm, invitational, not prescriptive
- [ ] User can dismiss recommendation without consequences (no re-prompting today)
- [ ] If user completes recommended action, card shows appreciation ("Thank you for that presence.")

---

### FR5: Forma do Ser Visualization

**Clarified Statement:**
A qualitative visualization of the user's Body/Mind/Purpose balance. The shape represents integration; regularity = balance, deformity = imbalance.

#### Visual Design Specification (Story 4.3)

**Base Shape:** Equilateral triangle with rounded vertices (not angular)

**Transformation Rules:**

| Balance State | Visual Transformation |
|---------------|----------------------|
| Body 8, Mind 8, Purpose 8 (balanced) | Equilateral, regular, calm colors (sage green) |
| Body 3, Mind 8, Purpose 8 (Body low) | Bottom edge compresses inward 30%; pale blue (cold) |
| Body 8, Mind 3, Purpose 8 (Mind low) | Left vertex flattens; yellow-green (muddy) |
| Purpose 8, Mind 8, Body 3 (Purpose low) | Right vertex flattens; gray (uncertain) |
| Body 2, Mind 2, Purpose 8 (two pillars low) | Triangle becomes thin/tall (needle-like); pale/washed colors |
| Body 8, Mind 2, Purpose 2 (two pillars low) | Triangle becomes wide/squat (compressed); muted colors |

**Color Palette:**
- Body = Warm (rust, terracotta, burgundy)
- Mind = Cool (blue, teal, indigo)
- Purpose = Grounded (sage, olive, gold)
- Balanced = Harmonious blend (soft gray-green)

**Interpretive Caption (max 1 sentence, examples):**

| State | Caption |
|-------|---------|
| Balanced | "You're in a place of integration." |
| Body low | "Your presence is quiet. The ritual awaits." |
| Mind low | "Clarity may be calling. Reflection is ready." |
| Purpose low | "Consider what truly matters to you." |
| Two low | "A time to return to your foundation." |

**Acceptance Criteria (AC per Story 4.3):**
- [ ] Shape updates in real-time after each input
- [ ] Animation is smooth (no jarring jumps); transition over 1 second
- [ ] Caption is tested with 10 users for interpretability (do they understand what the shape means without explanation?)
- [ ] Accessibility: Screen-reader users hear "Triangle balance: Body 7/10, Mind 5/10, Purpose 8/10" (numeric fallback)
- [ ] No numeric scores shown visually (qualitative only)

---

### FR6: Ephemeral Input Mode

**Clarified Statement:**
Users can choose to process reflections without persisting the raw text to disk. The app extracts signal for balance engine but does not save the original text.

**Processing Pipeline (already defined in FR2):**
- Text is held in memory
- Keywords extracted for balance categorization
- Metadata (timestamp, category, character count) is retained
- Raw text is deleted from memory after processing
- On app termination or session end, all ephemeral data is purged

**Acceptance Criteria (cross-reference FR2):**
- [ ] User sees a clear toggle before submitting: "Save this" vs. "Keep private"
- [ ] If user selects "Keep private," a confirmation appears: "This entry won't appear in your history. We'll only remember that you reflected."
- [ ] Ephemeral entries contribute to balance state exactly as saved entries do (same signal extraction)
- [ ] No archive or history view shows ephemeral entries
- [ ] User receives no notification or reminder about deleted ephemeral entries

---

### FR7: Consent and Privacy Settings

**Clarified Statement:**
The app provides transparent, granular privacy controls for behavioral detection, data storage, and analytics. Users can opt out of any feature without losing core functionality.

#### Privacy Settings Matrix

**Three toggles, independent:**

| Setting | ON (default: OFF) | OFF (default: OFF) | Impact on Core Features |
|---------|-------------------|-------------------|------------------------|
| **Behavioral Detection** | Interruption feature enabled; app monitors idle/gesture patterns | Interruption feature disabled; no behavioral tracking | Ritual, Reflection, Balance, Forma do Ser all work fully |
| **Prompt Generation (Cloud)** | Audio context sent to cloud service for personalized prompts | Only local heuristics used; generic fallback prompts | Prompts may be less tailored, but ritual still completes |
| **Anonymous Analytics** | App sends: daily active user count, feature adoption rates | No analytics sent to backend | Zero impact on app functionality |

**Default State:**
- Behavioral Detection: OFF
- Cloud Prompt Generation: OFF (use local heuristics)
- Analytics: OFF

**Acceptance Criteria (AC per Stories 5.1, 5.3):**
- [ ] Privacy settings screen is shown on first launch (onboarding step 2, after ritual intro)
- [ ] Each toggle has a 1-sentence explanation and a "Learn more" link
- [ ] User can change settings at any time in app settings menu
- [ ] When user disables a feature, a confirmation appears: "Interruptions are now off. You can turn them back on anytime."
- [ ] Core features (ritual, reflection, balance, visualization) continue to work with all toggles OFF

#### Data Retention Policy (Story 5.2)

**Data Inventory:**

| Data Type | Saved Mode | Ephemeral Mode | Retention |
|-----------|-----------|-----------------|-----------|
| Raw reflection text | Yes, encrypted | No | Until user deletes or 24 months (auto-delete) |
| Reflection metadata | Yes | Yes | Until user deletes or 24 months |
| Audio file (ritual) | No, deleted after prompt generation | No | Only during ritual session (deleted after prompt shown) |
| Audio features (mood, tone) | Yes (derived) | Yes | Until user deletes or 24 months |
| Balance state scores | Yes | Yes | Until user deletes or 12 months (rolling avg) |
| Interruption responses | Yes (timestamped) | Yes | Until user deletes or 12 months |
| User settings & consent | Yes | N/A | Until user deletes or changes |
| Analytics (if enabled) | Yes, anonymized | N/A | 30 days (aggregated only, no user ID) |

**User-Facing Explanation (Story 5.2):**

Show a simple table in settings:
```
What's saved:
- Your reflections (text) — stays on your phone unless you delete it
- When you reflect — date/time only
- Your balance progress — scores, not content
- Interruption choices — to improve suggestions

What's never saved:
- Your voice recording — deleted after the prompt is made
- Your private entries — if you choose "Keep private"

You can delete anything anytime in [Archive] menu.
```

**Acceptance Criteria (AC per Story 5.2):**
- [ ] User can view total data stored on their device (e.g., "You're storing 1.2 MB of reflections")
- [ ] User can export all their data as JSON (data portability)
- [ ] User can permanently delete all data with a single "Erase Everything" button (no undo, confirmed 2x)
- [ ] Privacy settings are tested with 5 privacy-conscious users for clarity

---

## 2. Non-Functional Requirements — Measurable Criteria

### NFR1: Usability

**Clarified Criteria:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Onboarding completion rate | ≥ 60% of new users complete first ritual | Analytics tracking from install → ritual completion |
| Time to first ritual | < 3 minutes from app open to ritual start | Session time measurement |
| Taps to ritual | ≤ 3 taps from home screen to ritual start | Navigation depth |
| Language clarity | 90% of users understand UI labels without help | Usability testing with 10 users; task completion without prompting |
| Terminology adherence | 0% of core UI uses productivity/gamification jargon | Code review checklist; no "Streak," "Goal," "Achievement," "Points" |

**Acceptance Criteria:**
- [ ] No onboarding screen shows more than 3 options at once
- [ ] All button labels are single words or short phrases (max 3 words)
- [ ] Font size minimum: 14pt for body text, 18pt for CTAs
- [ ] All interactions have immediate visual feedback (no silent failures)

---

### NFR2: Privacy

**Clarified Criteria:**

| Criterion | Specification |
|-----------|---------------|
| Data minimization | Only store data necessary for core experience (ritual, reflection, balance, visualization). No email, name, or device ID. |
| Encryption | All reflection text encrypted at rest using AES-256. Balance metadata unencrypted (low sensitivity). |
| Retention | Reflection entries deleted automatically after 24 months. Balance scores kept 12 months. Ephemeral data purged within session. |
| User control | User can delete any entry individually or all data with one button. Export all data as JSON. View data storage usage. |
| Audit | Privacy change log visible to user (e.g., "Settings changed 2026-05-10, Behavioral Detection OFF"). |
| Testing | Privacy acceptance tests: (1) Verify ephemeral data doesn't persist after app close, (2) Verify deletion actually removes files, (3) Verify cloud features don't send data when toggled OFF. |

**Acceptance Criteria:**
- [ ] Privacy Policy (public-facing) ≤ 500 words, written in plain language, 8th-grade reading level
- [ ] User can achieve full core functionality with all privacy toggles OFF (verified in QA)
- [ ] Zero telemetry sent without explicit user consent
- [ ] Code audit: No tracking libraries (Google Analytics, Mixpanel, etc.) without consent toggle

---

### NFR3: Performance

**Clarified Criteria:**

| Operation | Latency Target | Measurement |
|-----------|-----------------|-------------|
| Prompt generation (local) | ≤ 2 seconds from recording end to prompt display | UI latency timer; automated test |
| Prompt generation (cloud) | ≤ 10 seconds; fallback if timeout | Network latency + backend processing time |
| Forma do Ser render | ≤ 500ms from balance update to shape animation | Frame profiling on mid-range device |
| App startup | ≤ 2 seconds from tap to home screen | Cold start and warm start measured |
| Text entry responsiveness | ≤ 100ms keystroke-to-render | Input latency profiling |
| Device compatibility | Tested on devices with ≥ 2GB RAM | Functional testing; performance profiling on low-end device |

**Acceptance Criteria:**
- [ ] All latency targets met on iPhone 11, Samsung Galaxy A51 (mid-range devices)
- [ ] Graceful degradation if network is slow: show loading indicator after 2s, fallback after 10s
- [ ] Battery impact: App background usage < 2% per hour of device idle (measured with profiling tools)
- [ ] Memory usage: App footprint < 100MB in steady state

---

### NFR4: Accessibility

**Clarified Criteria:**

| Criterion | Standard | Specification |
|-----------|----------|---------------|
| Color contrast | WCAG AA | All text ≥ 4.5:1 contrast ratio; status indicators not color-only |
| Font sizing | Accessible | Minimum 14pt body text; maximum 18pt for main content (not too large) |
| Screen reader | iOS VoiceOver, Android TalkBack | All interactive elements labeled; images have alt text; navigation structure logical |
| Keyboard navigation | Full keyboard support | User can navigate entire app with Tab/Return keys (iOS/Android keyboard accessibility) |
| Motion sensitivity | Respect reduce-motion preference | Forma do Ser animation disabled if system-level reduce-motion is ON |
| Audio alternative | Text transcription | Breathing exercise can be visual-only (animated circle) instead of audio |
| Reflection entry | Accessible text editor | Full text cursor control, no custom gestures required |

**Acceptance Criteria:**
- [ ] Automated accessibility audit (Axe or Lighthouse) reports 0 critical issues
- [ ] Manual testing with screen reader on both iOS and Android; > 95% of features operable
- [ ] Tested with 2 users with accessibility needs (e.g., visual impairment, motor limitation)
- [ ] All video/audio content has captions or transcripts

---

## 3. Dependency & Risk Matrix

### Critical Blockers (resolve before dev starts)

| Item | Blocker | Status | Owner | Action |
|------|---------|--------|-------|--------|
| Autopilot detection heuristics | Unclear; may feel invasive | OPEN | Design/PM | Define 3 signals + test with 5 users |
| Input categorization rules | Ambiguous; may misclassify | OPEN | PM/Design | Create + test examples; build categorizer logic |
| Prompt library testing | Untested; may fail user resonance | OPEN | Content/Design | Test 10 prompts with 10 users; pick top 8–10 |
| Privacy defaults | Privacy-first claims but defaults unclear | OPEN | PM/Design | Confirm: all toggles OFF by default |
| Mobile tech stack | Not yet selected (React Native vs. Flutter vs. native) | OPEN | Tech/Arch | Decision + prototype (2 days) |

### Medium-Priority Clarifications (resolve during sprint planning)

| Item | Gap | Status | Owner | Action |
|------|-----|--------|-------|--------|
| Audio quality fallback | What if silence? | OPEN | Dev/PM | Define logic + test audio edge cases |
| Prompt generation strategy | Local vs. cloud heuristics | OPEN | Dev/Design | Prototype both; pick winner |
| Balance engine weights | Scoring formula parameters | OPEN | PM/Design | Tune + A/B test with 5 early users |
| Forma do Ser semantics | Shape transformations unclear | OPEN | Design | Create mockups; user test (5 users) |
| Analytics scope | What metrics matter? | OPEN | PM/Design | Define adoption KPIs + success metrics |

---

## 4. Validation Checklist Before Dev Handoff

- [ ] FR1–FR7 measured and unambiguous
- [ ] NFR1–NFR4 have concrete acceptance criteria
- [ ] Autopilot heuristics + rate limits locked
- [ ] Input categorization rules tested with examples
- [ ] Privacy matrix signed off by PM
- [ ] Prompt library finalized (10 prompts + 10 user tests)
- [ ] Mobile tech stack selected
- [ ] Forma do Ser visual design approved
- [ ] Performance targets agreed with dev team
- [ ] Accessibility baseline (WCAG AA) confirmed
- [ ] Onboarding flow wireframed + approved
- [ ] Data retention policy lawyer-reviewed (if required)

---

## 5. Known Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Prompt quality breaks trust on first ritual | HIGH | Test 20 prompts with 10 users; use top 8; monitor 1-week retention |
| Interruption frequency feels invasive | HIGH | Start conservatively (1/day, 6am-9pm); A/B test with 50 users |
| Users don't understand balance categorization | MEDIUM | Show users the categorization rules; test comprehension (5 users) |
| Privacy controls are confusing despite effort | MEDIUM | Simplify settings to 3 toggles (done); usability test with privacy-conscious users (5) |
| Performance on low-end devices degrades | MEDIUM | Profile on iPhone 11 & Galaxy A51 early; optimize hot paths |
| Audio capture fails silently | LOW | Explicit error handling + retry flow + fallback |

---

## 6. Deliverables for Dev Team

This document + the following artifacts:
1. **Prompt Library** (10 rituals + 10 reflections + 8 interruptions) — tested, finalized
2. **Balance Engine Logic Spec** — categorization rules, scoring formula, recommendation algorithm (pseudocode)
3. **Privacy Settings Matrix** — impact of each toggle on features (visual flowchart)
4. **Forma do Ser Visual Spec** — design mockups showing 5 balance states + color palette
5. **Performance Targets** — latency + memory + battery acceptance tests
6. **Accessibility Checklist** — WCAG AA criteria + screen-reader test cases
7. **Onboarding Wireflow** — steps 1–5 (intro → ritual → settings → first reflection → home)

**Due Date:** 2026-05-15 (end of business day) for dev handoff

---

**Questions for clarification?**  
📧 Mary — Business Analyst
