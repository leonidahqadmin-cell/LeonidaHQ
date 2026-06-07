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
- ✅ Pruned 8 zero-reference CSS classes (neon-box, glass, cyber-card, holo-text, futuristic-grid, dossier, parallax*) + keyframes holo — ~90 lines gone, no regression (275051a). NOTE: .glow-primary/.glow-secondary are now no-ops (text-shadow:none) but referenced 9/7× in JSX — could strip those refs + classes in a future cleanup.

## 🗺️ THE MAP (crown feature / the moat)
- ✅ Confidence system, deep detail panel, source notes, share-to-X, derived "last updated"
- ✅ Populated the **Confirmed/Official** tier — 2 pins (Vice Beach coast + Leonida swamp) promoted because Rockstar SHOWS those environments in official trailers; reworded so "Confirmed" = location shown, not gameplay (no rumor mislabeled). Legend top no longer dead (4aff26a)
- ✅ Stamped `lastUpdated` on all 25 pins (was 5); derived header now honest (4aff26a)
- 👀 Watch: cluster badge "Trailer" count looked like 11 in a dev screenshot vs expected 9 (2 promoted to Confirmed) — likely a stale-render artifact; confirm on live map after deploy.
### 🗺️ REAL MAP — research + phased plan (scoped 2026-06, NOT built)
**How it works today:** `/img/map-illustration.jpg` rendered via next/image (fill, object-contain, CSS `scale(1.42)`) as a static backdrop. Pins are absolute-positioned `<button>`s — `pinPosition(poi)` linearly maps `poi.lng/lat` (real Miami coords ~25.7/-80.1) through `MAP_BOUNDS` to left/top % (clamped 4-96%). "Zoom" is a single `transform: scale()` (1→1.7) on the whole container — **there is NO pan/drag** (zoom in and you're stuck centered). Plus: cluster toggle (fake `ClusterBadge`s vs individual pins), category + confidence filters, bottom-sheet detail panel, optional heat/routes overlays, mousemove coord readout, 44px tap targets.
**The #1 gotcha — fictional geography:** the lat/lng are real Miami but only used to position pins on the ARTWORK. A real maplibre/leaflet map with real-world tiles would place pins on actual Miami = WRONG (Leonida/Vice City is fictional). A real map MUST use the Leonida artwork as the basemap (image/raster layer), NOT geographic tiles. Leaflet + `L.CRS.Simple` + `L.imageOverlay` is the standard "game/fantasy map" pattern and is far lighter (~40KB) than re-adding maplibre-gl (~230KB, removed in d19cf8b).
**Risks:** bundle bloat; reworking ~580 lines of map-view.tsx to preserve confidence/cluster/filter/panel/share; SSR (needs dynamic import ssr:false — leaflet/maplibre need `window`); mobile gesture conflict (map pan vs page scroll); the artwork is stylized illustration, not true cartography — deep zoom exposes it as art.
**Phased plan:**
- **Phase 0 ✅ DONE (4bee369):** drag-to-pan shipped — art+overlays+clusters+pins wrapped in one translate+scale container; clamped, pan-resets-on-zoom-out, touch-action scoped, drag-vs-tap guard so panning never opens a pin. Phases 1-3 (Leaflet rework) remain deferred.
- **Phase 1:** Leaflet + CRS.Simple + imageOverlay of the artwork; pins → Leaflet markers from existing coords; dynamic import ssr:false; reimplement the click→panel.
- **Phase 2:** leaflet.markercluster for real clustering (replaces fake badges); filters as layer toggles.
- **Phase 3:** pin search, deep-link `/map#pin-id`, share.
**RECOMMENDATION:** the current static map is genuinely good (pins, filters, confidence tiers, panel, zoom, clusters, overlays) — the only real miss is **pan**. Do **Phase 0** (drag-to-pan) as a high-value/low-risk win; **defer Phases 1-3** (full Leaflet rework) unless the map becomes a primary growth driver — the ROI vs. bundle-bloat + 580-line rework isn't there yet. Verdict: static map is "good enough" for launch; just add pan.
- 💡 Pin search, deep-link `/map#pin`, real proximity clustering

## ⚠️ FOUND: stale-domain slop cover
- ✅ Removed the stale-domain (`leonidahq.XYZ`) `social-card-premium.jpg` slop card from ALL covers — 4 article heroes + map business-POI fallback + a pin evidence image → clean skylines/map; grep-confirmed zero refs (5d76564).

## ✍️ CONTENT / TRUST
- 🔜 Standardize the know/think/rumor/source structure on articles that lack it
- 🔜 Add real source links (bodies currently only cite @viraltbf)
- 🔜 Surface orphaned categories (Characters / Lore / Business) in nav; single-source the taxonomy
- ✅ Bylines vary by category (News/Intel/Forecast/Leaks/Map/Lore/Online/Business/Field Desk) via read-time map in articles.ts (31d3ac0)
- 💡 New evergreen guides; real per-author identities later if desired

## 🔎 SEO / SOCIAL
- ✅ Strong metadata, OG/Twitter cards, sitemap, robots, RSS, per-article JSON-LD
- ✅ Added `twitter:site` = @viraltbf (X attributes shared cards to the account) — 9d213e8
- ✅ Per-article dynamic OG cards via next/og ImageResponse — branded title card per article, auto-wired to og:image + twitter:image; verified PNG render (ea6e72d)
- ✅ FAQ schema now on 24 articles (latest: bureau-position-the-1986-mistake, asset-profile-caminos-duclos) (061f619). 5 remain: internal-memo-inland-settlement, summer-asset-drop, surveillance-note-external-source-silences, vice-city-2026-vs-1986 (06-), + 1 other (check faq.ts keys vs ls).
- ✅ INDEXING: Google Search Console verified + both sitemaps submitted; **Bing Webmaster verified** (msvalidate.01 meta tag, 2d0f183) + sitemap submitted. Site now indexing on Google + Bing/DuckDuckGo. User still optionally doing: Google News Publisher Center + GSC Request-Indexing.
- ⚠️ CORRECTION: `vice-city-2026-vs-1986` is NOT stale — the article file is `06-vice-city-2026-vs-1986.md` (numeric filename prefix; frontmatter slug is correct). LESSON: some article files have NN- numeric prefixes, so a Read by slug-name fails even though the article exists — always grep the frontmatter `slug:` to confirm existence, don't trust filename==slug.

## 🔍 ORGANIC TRAFFIC (get people here WITHOUT social — the compounding channel)
- ✅ Built **/countdown** — live ticking countdown to Nov 19 2026, keyword-targeted title/meta/h1/canonical for "gta 6 countdown / release date", FAQPage JSON-LD, internal links, sitemap (0.9) + footer nav, X hook queued (e957e3b)
- ✅ Keyword-targeted **/map** for "gta 6 map" — title/desc/keywords/canonical + OG/Twitter retuned (was generic "Leonida Map"); curl-verified (52fb8af)
- ✅ **CANONICAL HOST SPLIT — FIXED (June 6).** User flipped Vercel primary to bare `leonidahq.gg`; verified live: apex now serves 200 directly (was 307), www→apex redirect, sitemap.xml + news-sitemap.xml return 200 on apex. All canonical tags/OG/sitemap (which always pointed at apex) now match reality. (Minor: www redirect still 307 — user may switch to 308 permanent for cleaner consolidation.) ALSO: Google Search Console domain property VERIFIED (DNS TXT) + sitemaps being submitted — the site is now being indexed.
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

## 🧹 ASSET HYGIENE
- ✅ Deleted 6 unreferenced images (~12.7MB) from public/img — skyline-rain/grid-4-panel/beach-sunset/banner-wide/couple-silhouette/inland-city-dusk (32f495a)
- ✅ Fixed `ps5-window.png` = it was a BRAND-GUIDELINES sheet wrongly used as the $90-article + business-category hero → swapped to clean skylines, deleted the orphan (-1.8MB); downscaled logo-circle.png 2.1MB→442KB (512px, JSON-LD logo) (a62a683). public/img now ~12.5MB. Only big file left: favicon-source.png (704KB, kept as icon master — could relocate out of public).

## 🖼️ COVER AUDIT (complete — all 8 read & verified)
- ✅ Read every distinct cover image in article-images.ts. CLEAN: vice-city-neon-hero, article-two-cities, summer-marketing-hype (LEONIDA STATE LINE dusk skyline), leonida-map-preview (neon map), map-illustration (map artwork). INTENTIONAL designed graphics (text-heavy but on-brand, correct @viraltbf, on-theme — acceptable, NOT slop): article-lucia-jason (Lucia&Jason magazine cover), evidence-journey-map (evidence map), leonidahq-social-card (brand card). The two real slop covers (inland-city-dusk SUMMER poster, ps5-window brand sheet) were already removed. NO remaining slop.
- 💡 Minor: lucia-jason + social-card show "2025" text (dated vs 2026) — only matters if regenerating; cosmetic. Could also swap the 3 text-heavy graphics to clean skylines if a uniform look is wanted (stylistic choice, not a bug).

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
