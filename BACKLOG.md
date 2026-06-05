# LeonidaHQ — The Infinite Backlog 🌴

The single living to-do list for the site (and the empire around it). **It is never empty — that's the point.** A great GTA hub is never "done"; there's always more polish, content, and growth. The engine works the top open item each cycle, verifies it, marks it ✅, and adds anything newly discovered.

**Status key:** ✅ done · ⏳ in progress · 🔜 next up · 💡 idea/later
**Rule:** every new bug or idea gets added here the moment it's found. Every fix gets a before/after mobile screenshot (no blind changes). Keep the deploy green (build-gate before push).

_Live deploy: leonida-hq-z2x4.vercel.app · Repo: github.com/leonidahqadmin-cell/LeonidaHQ · Local: C:\Users\Nicholas\Documents\leonidahq_

---

## 🚀 SHIP / DEPLOY (gets the real site live)
- ✅ Deploy the Next.js site to Vercel
- 🔜 **Point leonidahq.gg DNS → Vercel** _(you: add domain in Vercel → set the A/CNAME at your registrar)_
- 🔜 **Verify leonidahq.gg in Resend** (publish SPF/DKIM) so signup emails actually send
- 🔜 Decide Ghost's fate: migrate its 40 articles + countdown, or retire it after DNS moves

## 📱 MOBILE / UX
- ✅ Map page mobile layout (was crammed + overlapping the footer)
- ✅ Map detail panel → closable bottom sheet (was off-screen + un-closeable)
- ✅ Mobile menu → full-screen opaque via portal (was trapped in the header / see-through)
- 🔜 Bigger map-marker tap targets for touch
- 💡 Bottom-sheet drag handle + swipe-to-close
- ♻️ Re-test every page at 390px after each change (headless Chromium)

## 🎨 DESIGN / POLISH
- ✅ Homepage hero → clean Vice City skyline (was fake-browser mockup slop)
- ✅ Article covers → clean skyline (was the "LEONIDAHQ" watermark ghosting titles)
- ✅ viewport meta + themeColor
- 🔜 Remaining article covers with busy poster text ("SUMMER 2026", pre-order) → cleaner images
- 🔜 Unify ad-hoc buttons onto `.btn-*` (about, not-found, map, follow-sidebar, email-capture)
- 🔜 Low-contrast text (white/38–45) → ≥ white/60 (WCAG AA)
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
- 🔜 Add `twitter.site` = @viraltbf
- 💡 Templated per-article OG cards (title overlay) via ImageResponse; FAQ schema on more pages

## 🧹 INFRA / PERF / HYGIENE
- ✅ Build clean (33 routes); committed + pushed; merge-typo caught & fixed
- 🔜 Remove dead deps (three / @react-three / maplibre / react-map-gl) + orphaned 3D components
- 🔜 Replace boilerplate README with a real runbook (dev :3001, env vars, deploy/DNS/Resend steps)
- 💡 Security headers in next.config; Core Web Vitals pass

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
