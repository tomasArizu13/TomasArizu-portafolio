# tomasarizu.com — Design System & Animation Spec

## How to use this
Give Claude Code **both**: (1) this file, and (2) `tomasarizu-hero-prototype-v3.html` — the working visual + behavior reference for the hero. The site **content is already updated** (previous pass). This spec is about the **visual identity + motion**, applied consistently across every section.

---

## 0. Non-negotiables (read first)
- **Premium = restraint + one signature + flawless performance.** The WebGL hero is THE signature. Every other section stays quiet and disciplined.
- **60fps everywhere**, desktop and mobile. Animate **transform/opacity only** — never width/height/top/left.
- **Respect `prefers-reduced-motion`** with static fallback states. **Keyboard focus visible.** **All content readable even if JS or WebGL fails.**
- **Don't break the build.** Verify at each step; keep it deployable.
- **Don't add new colors.** The palette is fixed; the green stays a sparing *signal*, not decoration.

---

## 1. Design tokens

### Color
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F4F5F2` | Background |
| `--paper-2` | `#FBFBF9` | Surfaces / cards |
| `--ink` | `#16181B` | Primary text |
| `--muted` | `#5C6167` | Secondary text |
| `--faint` | `#8A8F94` | Labels, captions |
| `--line` | `#E1E3DE` | Hairlines, borders |
| `--verified` | `#2E6E52` | Accent — used sparingly (the "verified/pass" signal) |
| `--verified-bright` | `#2FA06A` | WebGL / interaction glow only |

Rule: green = a **signal** (verified / pass / active), used sparingly and meaningfully. Everything else is ink-on-paper.

### Typography
- **Display:** `Bricolage Grotesque` (600/700) — headlines, used with restraint.
- **Body:** `Inter` (400/500) — paragraphs, UI text.
- **Mono:** `IBM Plex Mono` (400/500) — labels, "spec" blocks, data, eyebrows, and the verified/assertion motifs.
- Scale: confident display (clamp ~`2.6rem`–`6.2rem`), tight leading (~`0.98`), negative tracking (~`-0.025em`) on the display face.

### Motion language
- **Easing:** `expo.out` / power curves for entrances; `back.out` for the ✓ "tick" pop; `elastic` for magnetic return. **No linear, no default ease.**
- **Signature entrance:** word-by-word reveal for the hero headline (overflow-clip + translateY). **Stagger** for grouped items (spec cells, list items, cards).
- **The "verified" motif:** where claims / qualities / outcomes appear, a green `✓` can pop in (`back.out`). Use it tastefully — hero assertions, the "How I think about product" principles, maybe a subtle ✓ on a project outcome. **Don't overuse.**
- **Micro-interactions (desktop only):** custom cursor (dot + trailing ring that turns green on interactive hover), magnetic effect on key interactive elements. **Touch devices: standard behavior, no custom cursor, no magnetic.**

---

## 2. The hero — WebGL signature
Port the prototype hero to a React/Next component. **Match `tomasarizu-hero-prototype-v3.html`** in look and behavior.

- **Sonar point-field (Three.js):** background layer behind the hero content. Cursor emits ripples across a field of points; points rise and light green; **click = a stronger pulse**; subtle parallax tilt; ambient drift when idle.
- **Content** (headline, spec block, assertions) already exists — keep the copy, apply the reveal.

### Performance + fallback (CRITICAL — implement all of these)
- **Feature-detect WebGL.** If unavailable → render the clean paper hero (no canvas), content intact.
- **`prefers-reduced-motion`** → static field (single frame) or no canvas; no ripples; content shown immediately.
- **Cap `devicePixelRatio` at ≤2.** Cap/scale point density to the viewport; **reduce density on mobile**.
- **Pause the render loop** when the hero is scrolled out of view (`IntersectionObserver`) and when the tab is hidden (`visibilitychange`). Never run `requestAnimationFrame` off-screen.
- **Mobile:** ambient drift instead of cursor; lighter point count; if frame rate is poor, fall back to a static field.
- **Lazy-load Three.js** (dynamic import) so it never blocks first paint or hurts LCP.
- **Target 60fps.** If a device can't hold it, degrade gracefully.

---

## 3. Smooth scroll
- Add **Lenis** globally. Sync any scroll listeners / scroll-triggered animations to Lenis's scroll.
- Keep it **subtle** — smooth, not sluggish. Disable smoothing under `prefers-reduced-motion`.

---

## 4. Section-by-section motion (the rest of the site)
Every section reveals on scroll-in with the motion language: fade + small `translateY`, stagger, custom easing. Quiet, consistent, disciplined.

- **About / My story** — paragraph + personal line fade/stagger in.
- **How I Think About Product** — the 3 principles reveal in sequence; each principle heading can get the ✓ "pass" pop (ties the verified motif). Restrained.
- **Experience** — entries stagger in (role title, then bullets); mono label per entry.
- **Projects** — cards/rows reveal with stagger; the outcome line can carry a subtle green highlight or ✓; hover micro-interaction (subtle lift + cursor state).
- **Skills** — category groups + tags fade in with stagger (tags, not bars).
- **Now / Let's Talk** — availability line + contact links reveal; the "open to product roles" status echoes the hero pill.
- **Nav / footer** — consistent mono treatment.

---

## 5. Recommended stack
- **Hero canvas:** Three.js (as in the prototype), lazy-loaded.
- **Smooth scroll:** Lenis.
- **React reveals:** **Framer Motion** (idiomatic in Next) *or* GSAP + ScrollTrigger. **Pick ONE and use it consistently — do not mix reveal libraries.** (The prototype uses GSAP; either is fine.)
- **Custom cursor + magnetic:** a small vanilla utility / light hook (desktop only).

---

## 6. Build order
1. **Tokens + fonts** — set CSS variables / Tailwind theme from §1; load Bricolage Grotesque, Inter, IBM Plex Mono.
2. **Hero** — port the WebGL component from the reference file, with all fallbacks/perf from §2.
3. **Smooth scroll** — add Lenis globally.
4. **Reveals** — apply the motion language section by section (§4), with one reveal library.
5. **Micro-interactions** — custom cursor + magnetic (desktop only), hover states.
6. **QA pass** — verify the build; 60fps on desktop + mobile; reduced-motion; keyboard focus; WebGL-off fallback; Lighthouse (watch LCP/CLS). Fix regressions.

---

## 7. Guardrails / do-nots
- Don't animate everything — **restraint**; the hero is the one bold thing.
- Don't animate `width`/`height`/`top`/`left` — **transform/opacity only**.
- Don't block first paint with Three.js — **lazy-load**.
- Don't ship if it janks on mobile or fails `prefers-reduced-motion`.
- Don't add new colors — palette is fixed; green stays a sparing signal.
- Keep **all content visible** if JS/WebGL fails.
