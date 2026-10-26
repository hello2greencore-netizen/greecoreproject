Green Core blog writing guide
=============================

Files starting with an underscore are not published. This guide is what Claude follows
when it writes posts. Edit it any time to change how posts are written.
Last big change: Oct 26, 2026 (series, rotation, and depth rules; city-swap posts retired).

The goal
--------
Every post should be something only a working North Bay HVAC and water heater company
could write. Google and AI tools reward firsthand expertise: the why behind a problem,
what a tech actually checks, real jobs, plain trade-offs. A post that would read the same
with another company's name on it, or with another town's name in it, is not good enough.

Series and rotation
-------------------
Blog Autopilot posts Mon / Wed / Fri, one post per run:
- Monday: From the Field, if the job inbox in _TOPICS.md has an entry. Otherwise a Deep dive.
- Wednesday: Tech Tip of the Week.
- Friday: a Customer question or a Rebates and programs topic, alternating. Use a Deep dive
  instead when a timely one is waiting (a rule change, a season starting).
Take the first unchecked line of that series in _TOPICS.md. Then apply the balance rule:
across any 6 posts in a row, no more than 2 are mainly about heat pumps. If the next topic
would break it, take the next line that doesn't.

1. From the Field (job showcase), 600-1,000 words
   - Title starts "From the Field:" and names the problem and the home, e.g.
     "From the Field: A 1962 Petaluma Ranch With Crushed Attic Ducts".
   - Built ONLY from the facts in the job inbox entry Tony sent. Never add details that
     aren't there. If a needed fact is missing, leave that part out.
   - Sections: The call (what the homeowner noticed) / What we found / The options we gave /
     What they chose and why / How it turned out / What this means for your home.
   - Name the tech by first name if Tony gave it ("Rich found..."). No customer names,
     streets, or anything that identifies the home. No prices unless Tony says to.
   - Frontmatter image = the job photo Tony provided (committed under /public/images/blog/).
2. Tech Tip of the Week, 450-750 words
   - Title starts "Tech Tip:" and names one symptom or part.
   - One problem only: what you see, why it happens (the actual mechanism), the safe
     thing a homeowner can check, where to stop and call us, and what we do on a visit.
   - Include a short "Safe to check yourself / Call us if" list.
   - Don't attribute a tip or quote to a named tech unless Tony supplied it.
3. Deep dive, 1,100-1,800 words
   - The topics where expertise shows: rules and codes, repair-or-replace decisions,
     comparing quotes, safety, refrigerants, ducts, indoor air.
   - Explain the why, show the trade-offs, and say what we'd recommend for which kind of
     home. Use a table for any real comparison.
4. Customer question, 700-1,200 words
   - A question real homeowners ask today, answered directly and completely.
5. Rebates and programs, 700-1,200 words
   - Official program page checked the same day (see Accuracy rules).

Depth rules (all series)
------------------------
- No city-swap posts. A town belongs in a post only when it changes the advice
  (fog and damp crawlspaces in west county, inland heat in Windsor and Sonoma Valley,
  fire rebuilds in Santa Rosa, older homes in Marin). Never pad a post with town names.
- Explain the mechanism, not just the advice ("the flame sensor gets a coating that the
  control board reads as no flame, so it shuts the gas off for safety").
- Name what a tech actually checks, in plain words (static pressure, temperature split,
  refrigerant charge, gas pressure, combustion, duct leakage), and why it matters.
- Give real trade-offs: who an option is right for, and who it isn't.
- Never invent jobs, anecdotes ("on a recent job in Novato..."), customers, quotes,
  statistics, or "most of our customers" claims. Firsthand detail comes only from what Tony
  sends. General technical facts are fine when they're standard and true; for any number
  that isn't common knowledge, link the source (manufacturer, DOE, ENERGY STAR, the code
  or program page).
- Vary the opening. Don't start every post the same way after the short answer.

Voice
-----
- Concise, friendly, conversational. Write like a trusted local tech explaining things
  to a homeowner at the kitchen table, not like a brochure.
- Always "Green Core" (two words). Full name: "Green Core Heating & Air".
- Lean into our CORE values where it fits naturally: Craftsmanship, Ownership,
  Respect, Efficiency. Don't force it.
- Short sentences and short paragraphs (2 to 4 sentences).

Accuracy rules (never break these)
----------------------------------
- Never invent numbers, statistics, prices, or rebate amounts.
- The only price we publish in a post: standard gas or electric tank water heater
  replacement starts at $2,850. For other costs, link the cost guide
  (/guides/hvac-cost) or the instant estimate (/instant-estimate) instead of naming numbers.
- Rebates (TECH Clean California, BayREN, Sonoma Clean Power, MCE): check the program's
  current website before writing. Only state a dollar amount if the official page shows it
  today, and say "as of <Month Year>". Otherwise say rebates "may be available depending on
  program funding" and that we check and handle the paperwork.
- Rules and codes (Bay Area Air District zero-NOx rules, California code): state only what
  the official page shows today, with the date and one link to it.
- The federal 25C tax credit ended for systems installed after December 31, 2025.
  Don't mention federal tax credits as available.
- Don't say we do Manual J. Describe sizing in plain words: we size the system to the home
  (insulation, windows, sun exposure, ducts), not to the old unit's label.
- We do NOT do in-floor radiant or hydronic systems, or general plumbing.
- Water heater brands we install: SANCO2, GE GeoSpring, American Standard, Bradford White,
  Navien. Don't name other brands as ones we install.
- No customer names, addresses, or invented testimonials. No competitor names.
- Phone: (707) 988-5858.

Structure (built for Google and AI search)
------------------------------------------
1. Frontmatter (copy from an existing post). Date = the day it's published.
   Image: the closest existing photo in /public/images/services or /public/images/service-areas,
   or for From the Field, the job photo under /public/images/blog/. Don't make up image paths;
   check the file exists.
2. Open with **Short answer:** and a direct 2 to 3 sentence answer to the title question.
   AI search tools quote this part, so it must stand on its own.
3. `##` sections with plain, question-style or keyword-style headings (count by series above).
4. Use a list or a table where it genuinely helps (comparisons, steps, signs to watch for).
   The site's Markdown supports headings, paragraphs, bold, links, lists, blockquotes and
   tables. It does not show images inside the post body.
5. Always end with a `## Common questions` section: 3 to 4 `### Question?` headings, each
   followed by a 1 to 3 sentence answer. These become FAQ data for Google automatically.
6. Final line: a one-sentence call to action with (707) 988-5858, and where it fits, the
   instant estimate (/instant-estimate) or online booking.

Keywords and links
------------------
- Title and description use the words a homeowner would type or say ("furnace blowing cold
  air", "water heater relief valve leaking"). Use the main phrase naturally in the short
  answer and one `##` heading. Never stuff.
- Link to 2 to 4 of our own pages. Prefer the most useful one for the reader:
  guides (/guides/hvac-cost, /guides/hvac-size-calculator, /guides/furnace-heat-pump-or-ductless,
  /guides/tank-tankless-or-heat-pump-water-heater, /guides/furnace-maintenance-checklist,
  /guides/ac-maintenance-checklist, /guides/heat-pump-maintenance-checklist,
  /guides/water-heater-maintenance-checklist), services (/services/<slug>), repair /
  installation / maintenance hubs (/hvac-repair, /hvac-installation, /hvac-maintenance),
  /instant-estimate, /contact, and related posts (/blog/<slug>).
  Service slugs: heat-pumps, air-conditioning, furnaces, mini-splits, duct-work,
  harvest-thermal, water-heaters, heat-pump-water-heaters, tankless-water-heaters,
  gas-water-heaters, electric-water-heaters.
  City slugs (only when the town matters): petaluma, rohnert-park, santa-rosa, novato,
  san-rafael, mill-valley, tiburon, sebastopol, cotati, windsor, sonoma, san-anselmo, fairfax,
  healdsburg.
- Link out to the official source when citing a rebate, rule, or code (one link is enough).
- Don't repeat a topic or title that's already on the blog. Check existing posts and the
  Done list in _TOPICS.md first.
