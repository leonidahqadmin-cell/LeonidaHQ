# LeonidaHQ — The Infinite Backlog 🌴

The single living to-do list for the site (and the empire around it). **It is never empty — that's the point.** A great GTA hub is never "done"; there's always more polish, content, and growth. The engine works the top open item each cycle, verifies it, marks it ✅, and adds anything newly discovered.

**Status key:** ✅ done · ⏳ in progress · 🔜 next up · 💡 idea/later
**Rule:** every new bug or idea gets added here the moment it's found. Every fix gets a before/after mobile screenshot (no blind changes). Keep the deploy green (build-gate before push).

_Live deploy: leonida-hq-z2x4.vercel.app · Repo: github.com/leonidahqadmin-cell/LeonidaHQ · Local: C:\Users\Nicholas\Documents\leonidahq_

---

## 🚀 SHIP / DEPLOY (gets the real site live)
- ✅ Deploy the Next.js site to Vercel
- ✅ **Point leonidahq.gg DNS → Vercel** — LIVE (apex A → 76.76.21.21, www → cname.vercel-dns.com via Namecheap; serving Next.js, confirmed 2026-06-05)
- ✅ **Resend live** — domain verified, RESEND_API_KEY in Vercel Production; live POST to /api/subscribe returned `sent:true` (verified 2026-06-05)
- ✅ Ghost migration COMPLETE — all unique articles ported to the Next.js site (29 articles total) + /countdown rebuilt natively. Final 4: no-third-delay, originally-2025, review-copies, rdr2-mechanic (67d30df). Ghost can be retired.

## 📱 MOBILE / UX
- ✅ Map page mobile layout (was crammed + overlapping the footer)
- ✅ Map detail panel → closable bottom sheet (was off-screen + un-closeable)
- ✅ Mobile menu → full-screen opaque via portal (was trapped in the header / see-through)
- ✅ Bigger map-marker tap targets — 36px pins now in centered 44px hit zones; all 25 measured 44×44px via Playwright (32210a8)
- 💡 Bottom-sheet drag handle + swipe-to-close
- ♻️ Re-test every page at 390px after each change (headless Chromium)

## 🎨 DESIGN / POLISH
- ✅ Homepage hero → clean Vice City skyline (was fake-browser mockup slop)
- ✅ Article covers → clean skyline (was the "LEONIDAHQ" watermark ghosting titles)
- ✅ viewport meta + themeColor
- ✅ Removed the fake "SUMMER 2026 / pre-order" poster slop — it was `inland-city-dusk.jpg` (MISNAMED; `summer-marketing-hype.jpg` is actually a CLEAN dusk skyline). Killed every ref: leaks + surveillance covers, a map POI evidence image, the "hidden" POI fallback, homepage Neon Collectible hotspot. Diversified Predictions covers. Verified 390px (795cabd)
  - ⚠️ LESSON: image filenames here LIE — never swap covers by filename, always READ the image first (one Read per file; batch Reads can mis-order)
- ✅ Unified the full-size CTAs onto `.btn-*` — not-found (Back to HQ / Latest Intel) + about (Read the Reports) now use .btn-primary/.btn-secondary; verified /about + 404 (d62b2d3)
- ✅ Added `.btn-sm` + `.btn-primary-outline` variants and unified follow-sidebar's "Follow on X" + email-capture buttons; computed-styles verified (pink/teal, full-width preserved) (8ad7690). Button system now fully consistent.
- ✅ Low-contrast text → white/65 (WCAG AA) — bumped 14 faint labels/meta across map-view, article header, homepage stats; verified 390px (9ff7377)
- ✅ Orbitron: DROPPED — it was loaded (5 weights) but .font-heading maps to Inter, so it was never rendered. Removed for faster load, zero visual change (8b2ae7f). OPTIONAL: wiring `--font-heading`→`var(--font-orbitron)` would give a sci-fi heading look — a deliberate restyle for the user to greenlight, not auto-ship.
- ✅ Favicon fixed — 704KB PNG → app/icon.png (3.2KB) + app/favicon.ico (3.9KB), downscaled from the logo; head links both (8e492a4)
- 💡 Prune dead/no-op CSS (glow/cyber/holo classes)

## 🗺️ THE MAP (crown feature / the moat)
- ✅ Confidence system, deep detail panel, source notes, share-to-X, derived "last updated"
- ✅ Populated the **Confirmed/Official** tier — 2 pins (Vice Beach coast + Leonida swamp) promoted because Rockstar SHOWS those environments in official trailers; reworded so "Confirmed" = location shown, not gameplay (no rumor mislabeled). Legend top no longer dead (4aff26a)
- ✅ Stamped `lastUpdated` on all 25 pins (was 5); derived header now honest (4aff26a)
- 👀 Watch: cluster badge "Trailer" count looked like 11 in a dev screenshot vs expected 9 (2 promoted to Confirmed) — likely a stale-render artifact; confirm on live map after deploy.
- 💡 Real interactive map (maplibre + GeoJSON) instead of the static JPG — big lift, real moat
- 💡 Pin search, deep-link `/map#pin`, real proximity clustering

## ⚠️ FOUND: stale-domain slop cover
- ✅ Removed the stale-domain (`leonidahq.XYZ`) `social-card-premium.jpg` slop card from ALL covers — 4 article heroes + map business-POI fallback + a pin evidence image → clean skylines/map; grep-confirmed zero refs (5d76564).

## ✍️ CONTENT / TRUST
- 🔜 Standardize the know/think/rumor/source structure on articles that lack it
- 🔜 Add real source links (bodies currently only cite @viraltbf)
- 🔜 Surface orphaned categories (Characters / Lore / Business) in nav; single-source the taxonomy
- 💡 Real author bylines (all say "LeonidaHQ Desk"); new evergreen guides

## 🔎 SEO / SOCIAL
- ✅ Strong metadata, OG/Twitter cards, sitemap, robots, RSS, per-article JSON-LD
- ✅ Added `twitter:site` = @viraltbf (X attributes shared cards to the account) — 9d213e8
- ✅ Per-article dynamic OG cards via next/og ImageResponse — branded title card per article, auto-wired to og:image + twitter:image; verified PNG render (ea6e72d)
- 💡 FAQ schema on more pages (extend src/lib/article-faq.ts with more slugs)

## 🔍 ORGANIC TRAFFIC (get people here WITHOUT social — the compounding channel)
- ✅ Built **/countdown** — live ticking countdown to Nov 19 2026, keyword-targeted title/meta/h1/canonical for "gta 6 countdown / release date", FAQPage JSON-LD, internal links, sitemap (0.9) + footer nav, X hook queued (e957e3b)
- ✅ Keyword-targeted **/map** for "gta 6 map" — title/desc/keywords/canonical + OG/Twitter retuned (was generic "Leonida Map"); curl-verified (52fb8af)
- ⚠️ **CANONICAL HOST SPLIT (found June 6, needs USER Vercel decision):** site serves on **www**.leonidahq.gg but apex leonidahq.gg does a *307 (temporary)* redirect to www — while all canonical tags/sitemap/robots point to the **apex**. Google sees a split signal. FIX = pick ONE canonical host (recommend bare apex `leonidahq.gg`): in Vercel → Domains, set leonidahq.gg as primary + redirect www→apex (308 permanent). Then app's apex canonicals match reality. Until decided, indexing is muddied.
- ✅ **Google News sitemap** live at `/news-sitemap.xml` (xmlns:news, last-48h + fallback, escaped titles, revalidate 1h) + referenced in robots.txt; HTTP-200/XML verified (19daed8). **→ USER ACTION: submit site in Google News Publisher Center.**
- ✅ **Embeddable countdown widget** — chrome-free noindex `/embed/countdown` (compact single-row timer + "via leonidahq.gg" backlink) + copy-paste iframe snippet on /countdown; verified fits 560×170 with backlink visible (8825190). Each embed = a backlink.
- ✅ **FAQ schema (JSON-LD)** on 3 evergreen articles (file-size, beta-scam, subscription) via src/lib/article-faq.ts — conditional FAQPage script, curl-verified present on FAQ articles + absent on others (a05ae8b). Add more slugs to article-faq.ts to extend.
- 🔜 **Core Web Vitals pass** (LCP/CLS/INP) — ranking factor; measure with Lighthouse, fix the worst offender.
- ✅ Internal-linking pass — every article ends with a "Related intel" block (3 same-category-first articles + map link); verified 390px (97065df)
- 💡 evergreen "GTA 6 release date" hub page that updates as the date nears.
- 💡 YouTube Shorts/TikTok cut from the map/evidence (short-form, not Twitter/Reddit) → link in bio. Owned email list = the audience the algorithm can't take.

## 🧹 INFRA / PERF / HYGIENE
- ✅ Build clean (33 routes); committed + pushed; merge-typo caught & fixed
- ✅ Removed dead deps (three / @react-three / maplibre / react-map-gl, 7 total) + orphaned 3D components — 1,365 lockfile lines gone (d19cf8b)
- 🔜 Replace boilerplate README with a real runbook (dev :3001, env vars, deploy/DNS/Resend steps)
  - Env vars (Vercel Production): `RESEND_API_KEY` (required, signup emails) · `SUBSCRIBE_NOTIFY_TO` (optional, emails you per new signup — set to davisn2015@gmail.com) · `SUBSCRIBE_NOTIFY_TO` changes need a redeploy to take effect
- ✅ Security headers in next.config (nosniff, referrer-policy, dns-prefetch site-wide; X-Frame-Options SAMEORIGIN + CSP frame-ancestors 'self' on all routes except /embed which stays frame-ancestors * for embedding) — curl-verified (9f928ed)
- 💡 Core Web Vitals pass (Lighthouse, fix worst offender)
- 💡 GitHub repo was renamed (push warns "repository moved" → leonidahqadmin-cell/LeonidaHQ.git); update remote: `git remote set-url origin https://github.com/leonidahqadmin-cell/LeonidaHQ.git` to drop the redirect

## ⚠️ ROOT CAUSES / RISKS
- 🔜 Find the Ghost husk auto-publisher (a Make/Zapier scenario) and set it to draft — the guard only band-aids it
- 💡 Kill the multi-tool sprawl (Codex/Grok/Claude all editing) — pick ONE builder to avoid the ~80-versions problem

## 📣 GROWTH / DISTRIBUTION (the empire)
- 🔜 **@viraltbf daily reps** (posts + replies) — the real growth lever, only you can do it
- 🔜 Short-form video (lead) + Reddit + Twitter, fed by the daily DROP-KIT
- 🔜 **GATE 0:** land ONE post that breaks out (>20 reposts or >50 follows) = proof it compounds
- 💡 Build the owned email list (the asset the algorithm can't take)

## ♻️ ALWAYS-ON (the "infinite" engine)
- Test mobile at 390px after every visual change
- Refresh DROP-KIT daily; log what lands in LEARNINGS
- Add every new bug/idea here the instant it's found
- **X draft-assist:** whenever a NEW article ships/migrates, append a paste-ready clickbait hook (Claude writes it free — NOT the bot's API) to `C:\Users\Nicholas\leonidahq-x-bot\drafts.md`. Auto-posting is shelved (X API ~$100/mo); user posts manually from that file.
- Verify before/after — never ship a fix blind
- Keep the deploy green

---
_The engine reads this, works the top open 🔜, verifies, marks ✅, and appends discoveries. Mirror to the OneDrive brain if you want it on both PCs._
