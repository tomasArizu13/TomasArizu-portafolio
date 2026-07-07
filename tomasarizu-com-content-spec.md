# tomasarizu.com — Content & Copy Spec (product-focused rebuild)

**Voice & positioning (the through-line — keep every section consistent with this):**
A builder who is genuinely obsessed with product: understanding the user, finding the real problem, deciding what's worth building, and caring about the craft until it feels right. Confident and curious — *not* sales-y, not "hire me." Show substance and range (business thinking + technical depth + things actually built and validated), and let quality do the attracting. Availability is signaled as *enthusiasm for product work*, never as a plea.

Language: English (matches current live site).

---

## 1. HERO

**Headline:**
> I build products people actually want to use.

**Subhead:**
> Product-minded builder with a business degree and a technical backbone. I like the messy part — figuring out the real problem — and the craft of shipping the solution.

**Status line (small, under subhead):**
> QA Automation Engineer @ Luno · Digital Business, Universidad de San Andrés

**Primary action:** a scroll cue — `See what I've built ↓` (not "Start your project" / "Hire me").

*(Remove the current "Ready to start your next project? Let's work together" framing entirely — that's freelance-for-hire energy and works against the product positioning.)*

---

## 2. ABOUT / MY STORY

> I studied Digital Business at Universidad de San Andrés — but I learned the most by building. I've shipped MVPs, validated ideas with real users before writing a line of code, and today I keep a multi-platform product healthy as QA Automation Engineer at Luno. That role lets me see products from the inside: what breaks, where users get stuck, and what actually matters to ship.
>
> What pulls me in is the full loop of product — talking to users, finding the real problem, deciding what's worth building, and sweating the details until it feels right. I'm comfortable on both sides: I can talk strategy with stakeholders and read the codebase with the devs.

**[PERSONAL / INTERESTING LINE — pick one, Tomi to confirm]**
- Co-founded OneBite, a premium dining club, and validated it with 60+ real users before building.
- *(Optional wine angle, if you want it: "I come from a wine family, which is part of why I care about products with craft and a real story behind them.")*

---

## 3. HOW I THINK ABOUT PRODUCT

*(New section — this is what makes the profile feel complete and interesting, and it directly shows the "loves product / solves client problems" angle. Three short principles.)*

**Start with the problem, not the feature.**
> I'd rather validate demand with 60 surveys than build something nobody asked for. Every product I've worked on started with "what's the actual problem here?"

**The user is the whole point.**
> My QA work trained me to obsess over the real experience — where people get confused, where the flow breaks, what makes something feel effortless.

**Ship, then learn.**
> Prototypes over decks. I like getting something real in front of people fast and improving from there.

---

## 4. EXPERIENCE

**QA Automation Engineer — Luno** · Remote · Jan 2026 – Present  *(ADD THIS — it's currently missing from the site entirely)*
- Ensure product quality across three platforms: Creator Hub (content creators), Adapt (a ChatGPT-style assistant), and Adium Pro (pharmaceutical).
- Act as the bridge between developers, design, and the client — detecting, documenting, and prioritizing issues, and translating needs into what to fix first.
- Built the test automation from scratch (Playwright + Maestro), with cross-platform coverage.
- Contributed feedback on product and UX decisions alongside the Head of Product.

**Operations Specialist (Internship) — Globant · Disney Smart Parks** · Dec 2024 – Apr 2025
- Integrated Jira with Smartsheet dashboards for operational visibility, supporting Program Management.
- Turned operational and sensor data into actionable alerts; documented SOPs and cross-team handoffs.

> **Move "Digital House" out of Experience.** It reads as a job title ("Junior Full Stack Developer, 2021–2023") but it's a coding program, and it collides with the UdeSA timeline. List it under Education/Training instead (see §7).

---

## 5. PROJECTS

*(Curate to your 3–4 strongest. Fix every broken link — see change list. Keep the framing product-first: problem → what you did → outcome.)*

**Lendit** — Credit-fund manager for SMBs (thesis) · `lendit-next-arg.vercel.app`
> Designed the end-to-end web prototype and the demo-day pitch.

**OneBite** — Premium dining club (co-founded) · `onebiteclub.com`
> Identified the problem and validated demand with **60+ surveys** of potential users (high willingness to pay) before building. Designed the membership and benefits. Live product.
> *(Fix: the site currently says "40+ leads" — make it consistent at 60+.)*

**Restaurant payments on Solana** — Wallet + rewards program (with an ML engineer)
> Conceptualized the product (Solana payments + points-based gamification) and collaborated on development with a technical co-founder over several months.
> *(Confirm the project name — "GroMoPo" doesn't communicate what it is; use a descriptive title unless the name is real. Do NOT link the `loganrudd/lottery` repo — it's someone else's repo, named "lottery," and confuses anyone who clicks. Link your own repo or no link.)*

**[CONFIRM / CURATE] RealSync, Inmobot, PayBite** — these are on the current site with broken links and inconsistent descriptions.
> Decide which to keep, rewrite each with the same problem → action → outcome format, and fix the links (e.g., Inmobot's demo currently points to RealSync's URL; its GitHub link contains a `OneDrive/Escritorio` local path). Don't ship a project with a broken or wrong link — a dead link hurts more than an omitted project.

---

## 6. SKILLS

*(Reframe product-first. **Fix the broken bars** — they currently all show 0%, which looks unfinished. Best move for a premium look: drop numeric progress bars entirely and use clean tags/pills grouped by category.)*

- **Product:** user discovery & validation, feature definition, prioritization, prototyping, MVP building
- **Technical / Testing:** Playwright (TypeScript, Page Object Model), Maestro, test-case design, bug reporting, cross-platform testing
- **Technologies:** TypeScript/JavaScript, React, Next.js, SQL (basic), Python (basic), Three.js/React Three Fiber (exposure), Solana/web3 (exposure)
- **Tools:** Linear, Notion, Jira, Figma, GitHub
- **Languages:** Spanish (native), English (C1 — Cambridge)

---

## 7. EDUCATION

**Bachelor's in Digital Business — Universidad de San Andrés (UdeSA)** · 2021 – 2026
**Full-stack development program — Digital House** · 2021–2023  *(here, as training — not as a job)*
**Bilingual High School Diploma — Colegio Cardenal Newman** · 2008–2020

> **Honesty note:** since the thesis defense is still pending, don't claim the conferred title anywhere ("Licenciado" / "graduated"). Safe phrasing: "just wrapped up my Digital Business studies at UdeSA." Switch to "graduated / Bachelor's in Digital Business" once you defend.

---

## 8. NOW / LET'S TALK  (replaces the "hire me" CTA)

> **Right now:** wrapping up my Digital Business studies at UdeSA, keeping products healthy at Luno, and looking for a **product role** — PM, Product Analyst, or Product Owner — where I can own outcomes. If you're building something interesting, I'd love to talk.

**Contact:** email · LinkedIn · GitHub  *(clean row of links, no form needed)*

---

## CHANGES TO IMPLEMENT (checklist for Claude Code)

1. **Remove the auto-playing Daft Punk audio** ("Something About Us.mp3"). It's copyrighted music you don't have rights to, and autoplay audio is bad UX. Delete it.
2. **Add Luno** (QA Automation Engineer, Jan 2026 – Present) to Experience — it's currently missing.
3. **Reposition all copy** from "freelance developer for hire / start your project" → product-minded builder, per §1 and §8.
4. **Move Digital House** from Experience (job) to Education/Training (§7).
5. **Fix the Skills bars** — they all show 0%. Replace with clean category-grouped tags, or real values.
6. **Fix broken links:** Inmobot demo → correct URL (not RealSync's); replace any GitHub link containing a local `OneDrive/Escritorio` path; remove the `loganrudd/lottery` link from the Solana project.
7. **Make stats consistent & honest:** OneBite 60+ (not 40+); drop vague inflated counters like "20+ projects / 5+ MVPs" unless they're real and specific.
8. **Update footer year** © 2025 → 2026 (or make it auto-update).
9. **Graduation wording:** don't claim the conferred title until the thesis is defended (§7).
10. **Curate projects** to the 3–4 strongest, each rewritten problem → action → outcome (§5).
