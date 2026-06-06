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
- 🔜 Decide Ghost's fate: migrate its 40 articles + countdown (still at leonidahq.ghost.io), or leave them

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
- 🔜 Unify ad-hoc buttons onto `.btn-*` (about, not-found, map, follow-sidebar, email-capture)
- ✅ Low-contrast text → white/65 (WCAG AA) — bumped 14 faint labels/meta across map-view, article header, homepage stats; verified 390px (9ff7377)
- 🔜 Orbitron: apply to headings OR drop the unused font import
- 💡 Prune dead/no-op CSS (glow/cyber/holo classes); proper favicon (currently a 700KB PNG)

## 🗺️ THE MAP (crown feature / the moat)
- ✅ Confidence system, deep detail panel, source notes, share-to-X, derived "last updated"
- 🔜 Add genuinely **Confirmed** pins (0 of 25 use the top tier — legend's top is dead)
- 🔜 Set `lastUpdated` on all 25 pins (only 5 set)
- 💡 Real interactive map (maplibre + GeoJSON) instead of the static JPG — big lift, real moat
- 💡 Pin search, deep-link `/map#pin`, real proximity clustering

## ✍️ CONTENT / TRUST
- 🔜 Standardize the know/think/rumor/source structure on articles that lack it
- 🔜 Add real source links (bodies currently only cite @viraltbf)
- 🔜 Surface orphaned categories (Characters / Lore / Business) in nav; single-source the taxonomy
- 💡 Real author bylines (all say "LeonidaHQ Desk"); new evergreen guides

## 🔎 SEO / SOCIAL
- ✅ Strong metadata, OG/Twitter cards, sitemap, robots, RSS, per-article JSON-LD
- ✅ Added `twitter:site` = @viraltbf (X attributes shared cards to the account) — 9d213e8
- 💡 Templated per-article OG cards (title overlay) via ImageResponse; FAQ schema on more pages

## 🧹 INFRA / PERF / HYGIENE
- ✅ Build clean (33 routes); committed + pushed; merge-typo caught & fixed
- ✅ Removed dead deps (three / @react-three / maplibre / react-map-gl, 7 total) + orphaned 3D components — 1,365 lockfile lines gone (d19cf8b)
- 🔜 Replace boilerplate README with a real runbook (dev :3001, env vars, deploy/DNS/Resend steps)
  - Env vars (Vercel Production): `RESEND_API_KEY` (required, signup emails) · `SUBSCRIBE_NOTIFY_TO` (optional, emails you per new signup — set to davisn2015@gmail.com) · `SUBSCRIBE_NOTIFY_TO` changes need a redeploy to take effect
- 💡 Security headers in next.config; Core Web Vitals pass
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
- Verify before/after — never ship a fix blind
- Keep the deploy green

---
_The engine reads this, works the top open 🔜, verifies, marks ✅, and appends discoveries. Mirror to the OneDrive brain if you want it on both PCs._
