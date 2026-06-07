// FAQ data for evergreen articles → rendered as FAQPage JSON-LD for rich results.
// Answers are drawn from each article's own content. Add a slug here to give it an FAQ.

export type FaqItem = { q: string; a: string };

export const ARTICLE_FAQ: Record<string, FaqItem[]> = {
  "how-big-will-gta-6-be-file-size": [
    {
      q: "How big will GTA 6 be?",
      a: "Nothing is official yet, but the direction is clear: GTA 6 will be huge. Red Dead Redemption 2 runs around 150GB and modern AAA games routinely cross 100GB, so GTA 6 — a bigger, denser world than anything Rockstar has built — is almost certain to be one of the largest console installs.",
    },
    {
      q: "How much storage should I free up for GTA 6?",
      a: "Clearing 150GB or more is a safe assumption. If your console is tight on space, consider a fast external or expansion SSD before launch.",
    },
    {
      q: "Will there be a GTA 6 day-one patch?",
      a: "Almost certainly. Expect a sizable day-one update on top of the base download, so budget extra space beyond the install size itself.",
    },
    {
      q: "Is the GTA 6 file size confirmed?",
      a: "No. Treat any specific number circulating today as a rumor, not a spec sheet. The exact figure will come from Rockstar closer to launch.",
    },
  ],
  "fake-gta-6-beta-scam-warning": [
    {
      q: "Is there a GTA 6 beta?",
      a: "No. There is no public GTA 6 beta — Rockstar has not announced any pre-release testing program. Every 'GTA 6 beta download' or 'early access key' circulating right now is fake by definition.",
    },
    {
      q: "Are GTA 6 beta downloads safe?",
      a: "No. They range from fake 'beta key' giveaways that harvest your login details to 'installer' downloads that are actually malware or info-stealers. On PC, running an unknown 'GTA 6 setup.exe' can hand an attacker control of your machine.",
    },
    {
      q: "Is there a GTA 6 PC version at launch?",
      a: "There is no confirmed PC version at launch. GTA 6 releases first on PS5 and Xbox Series X|S, which is part of why any 'PC test build' offer is a scam.",
    },
    {
      q: "How do I get GTA 6 safely?",
      a: "Trust only official sources — Rockstar's own channels and verified storefronts. Never download a 'beta' or 'leaked build' from a random link or Discord server. If testing were real, Rockstar would announce it loudly.",
    },
  ],
  "could-gta-6-get-a-subscription-model": [
    {
      q: "Will GTA 6 require a subscription?",
      a: "A mandatory subscription just to play the single-player campaign is extremely unlikely — that's never been how Rockstar sells its core games. An optional, GTA+-style membership for online extras is far more plausible.",
    },
    {
      q: "What is GTA+?",
      a: "GTA+ is Rockstar's existing paid membership for GTA Online, granting monthly perks and currency. Many expect that membership model to expand alongside GTA 6's next-generation online mode.",
    },
    {
      q: "Is GTA 6's monetization confirmed?",
      a: "No. Nothing about GTA 6's monetization is confirmed. The safe expectation is a full-price game with an optional online membership for extras — not a mandatory subscription. Anyone claiming more right now is guessing.",
    },
  ],
  "no-third-delay": [
    {
      q: "When does GTA 6 come out?",
      a: "Grand Theft Auto VI is confirmed for November 19, 2026 on PlayStation 5 and Xbox Series X|S.",
    },
    {
      q: "Will GTA 6 be delayed again?",
      a: "A third delay is unlikely. The November 19, 2026 date is now built into Take-Two's financial guidance to investors — slipping it would mean restating Wall Street projections, not just a quiet development push.",
    },
    {
      q: "Why is this date more reliable than the earlier ones?",
      a: "Earlier targets were broad marketing windows. The current date is tied to Take-Two's record fiscal-2027 guidance, which makes it a far stronger commitment than a launch window ever was.",
    },
  ],
  "review-copies": [
    {
      q: "When do GTA 6 reviews come out?",
      a: "Most likely mid-November 2026, around launch week. Tentpole games typically get review code one to two weeks ahead, with an embargo that lifts a few days before or on launch day.",
    },
    {
      q: "Will there be early GTA 6 review access?",
      a: "Rockstar is historically tight with pre-release access, so the review embargo may lift just a day or two before the November 19 launch rather than well in advance.",
    },
    {
      q: "Are 'leaked GTA 6 reviews' before launch real?",
      a: "Be cautious — any 'review' that appears before the official embargo is a classic scam vector. The real verdicts arrive in a clear, coordinated wave.",
    },
  ],
  "originally-2025": [
    {
      q: "Was GTA 6 supposed to come out in 2025?",
      a: "Yes — Rockstar's first trailer attached a broad 2025 window. It later narrowed to fall 2025, moved to early 2026, and finally landed on the confirmed November 19, 2026 date.",
    },
    {
      q: "Why was GTA 6 delayed from 2025?",
      a: "To give Rockstar more time to polish the largest open world it has ever built. Big delays on flagship titles are the norm across the industry, not the exception.",
    },
    {
      q: "Is the GTA 6 release date final now?",
      a: "The November 19, 2026 date is firm and tied to Take-Two's financial guidance — a much stronger anchor than the early marketing window ever was.",
    },
  ],
  "gta-6-table-tennis-rage-origin": [
    {
      q: "What game engine does GTA 6 use?",
      a: "GTA 6 runs on RAGE — the Rockstar Advanced Game Engine — the in-house technology that has also powered GTA IV, Red Dead Redemption, GTA V and Red Dead Redemption 2.",
    },
    {
      q: "What was the first RAGE engine game?",
      a: "Rockstar Games presents Table Tennis (2006) was the first title built on RAGE. Rockstar used the small project to test and prove the engine that would later run its biggest games.",
    },
    {
      q: "Why did Rockstar make a table tennis game?",
      a: "It was never really about ping-pong. Table Tennis was a low-risk way to harden the new RAGE engine — the foundation Rockstar has refined for nearly two decades.",
    },
  ],
  "why-we-waited-13-years-for-gta-6": [
    {
      q: "Why did GTA 6 take so long?",
      a: "Three reasons: GTA 5 and GTA Online kept generating billions for a decade (no pressure to rush), Rockstar poured years into Red Dead Redemption 2, and each new game's scale keeps growing.",
    },
    {
      q: "How long has it been since GTA 5?",
      a: "GTA 6 launches November 19, 2026 — more than 13 years after GTA 5's September 2013 release, the longest gap between mainline entries in series history.",
    },
    {
      q: "Is GTA 6 the most expensive game ever made?",
      a: "It has been widely reported as the most expensive game ever made, reflecting the scale of building a detailed, living Leonida to Rockstar's standards.",
    },
  ],
  "rdr2-mechanic": [
    {
      q: "What should GTA 6 take from Red Dead Redemption 2?",
      a: "Its systemic, reactive world — NPCs that remember you, a witness-and-consequence system, and item-level detail — rather than any single standalone feature.",
    },
    {
      q: "Will GTA 6 have RDR2-style mechanics?",
      a: "Nothing is confirmed, but GTA 6 shares Rockstar's RAGE technology and studio DNA, so fans reasonably expect that level of systemic depth.",
    },
    {
      q: "What made RDR2's world feel alive?",
      a: "A web of small systems — NPC memory and reactions, witnesses who could report crimes, and persistent detail — not the story alone.",
    },
  ],
  "two-cities-online": [
    {
      q: "Will GTA 6 have a second city besides Vice City?",
      a: "Map evidence points to Leonida having two major metros — Vice City plus an inland city — and everything in between, a much larger scale than GTA V's single Los Santos.",
    },
    {
      q: "How does 'two cities' change GTA Online?",
      a: "It unlocks territory and rival-crew systems that differ by metro, economy loops that span the whole state (smuggle from the inland city, launder in Vice City), and separate seasonal events per city — well beyond GTA V's drip-fed islands.",
    },
    {
      q: "What's the risk of a two-city GTA Online?",
      a: "Maintaining two living cities at GTA 6 quality is very expensive. If Rockstar under-invests in one side after launch, the 'two cities' promise could end up feeling like marketing.",
    },
  ],
  "launch-day-economy": [
    {
      q: "How will GTA 6 make back its budget?",
      a: "Primarily through GTA Online — buyable franchises, smuggling routes between the cities, gambling and entertainment venues, and player-run criminal empires form a self-sustaining economy that doesn't need constant new map drops.",
    },
    {
      q: "Why do the businesses on the map matter?",
      a: "Each business, fence, and heist-prep location is a revenue node — together they're the skeleton of a player-driven economy designed to run for years.",
    },
    {
      q: "How long could GTA 6 Online last?",
      a: "GTA V's online mode is still profitable 12+ years after launch. Leonida is built to do the same at an estimated 2-3x the scale.",
    },
  ],
  "trailer-3-scorecard": [
    {
      q: "When is GTA 6 Trailer 3?",
      a: "Rockstar has not confirmed a Trailer 3 date or format. Any specific date circulating now is rumor until Rockstar says otherwise.",
    },
    {
      q: "What should GTA 6 Trailer 3 show?",
      a: "Ideally a clearer Lucia and Jason story hook, a better look at the second city / inland map, and a few seconds of gameplay-readable footage — driving, crowds, interiors, police, or traversal.",
    },
    {
      q: "What will Rockstar hold back until launch?",
      a: "Likely the full GTA Online reveal, the exact economy structure, major story spoilers, deep mission walkthroughs, and the full map — those are launch-window weapons.",
    },
  ],
  "second-city-evidence": [
    {
      q: "Does GTA 6 have a second city besides Vice City?",
      a: "Rockstar hasn't said it outright, but Trailer 2 shows multiple distinct skylines, inland architecture and vegetation that don't match the coast within a short drive, and geography that doesn't loop — strong evidence of a second major metro.",
    },
    {
      q: "Why does the name 'Leonida' suggest two cities?",
      a: "Every prior Rockstar title using a state name (Liberty State, San Andreas) had multiple major population centers. State-level 'Leonida' branding only makes sense if there's more than one signature city.",
    },
    {
      q: "What don't we know about the second city yet?",
      a: "Its name, its character (more modern? more industrial?), and how seamless travel between the metros actually feels in gameplay — details Trailer 3 may finally deliver.",
    },
  ],
  "billion-dollar-map": [
    {
      q: "How much did GTA 6 cost to make?",
      a: "Take-Two referenced a development budget exceeding $1 billion in earnings commentary — confirmed public record, not a leak — making GTA 6 one of the most expensive games ever produced.",
    },
    {
      q: "What does GTA 6's $1B+ budget pay for?",
      a: "Two distinct major cities, multiple biomes and verticality (rooftops, interiors, water, swamps), buyable businesses and passive-income systems for Online, and high-fidelity ambient life across the whole state.",
    },
    {
      q: "Why does the budget point to a second city?",
      a: "At this scale the map is the platform for a decade of GTA Online. A second city isn't a nice-to-have — it's table stakes for the live-service model to sustain itself for ten-plus years.",
    },
  ],
  "state-of-play-reality-check": [
    {
      q: "Was GTA 6 at State of Play?",
      a: "No — GTA 6 did not appear at Sony's State of Play. That isn't a delay signal; Rockstar controls its own marketing rather than surfacing inside someone else's showcase.",
    },
    {
      q: "Does skipping State of Play mean GTA 6 is delayed?",
      a: "No. The real signals — Take-Two's summer marketing window and Rockstar's quiet infrastructure and community-channel moves — all still point the same direction. The November 19, 2026 date stands.",
    },
    {
      q: "When will the next GTA 6 news drop?",
      a: "Most likely through Rockstar or Take-Two directly — a standalone trailer, store-page movement, or screenshots — not a partner showcase. Any exact Trailer 3 date (late-June/early-July guesses) is rumor until official.",
    },
  ],
  "real-leonida-locations": [
    {
      q: "What real places inspired GTA 6's Leonida?",
      a: "Leonida is Florida with the serial numbers filed off: Vice City is Miami / South Beach, the swamps come straight from the real Everglades, and the inland 'second city' reads like Tampa, Orlando, or Jacksonville.",
    },
    {
      q: "Is Vice City based on Miami?",
      a: "Yes — Vice City has always been Miami with the names changed: the strip, the neon, and the art deco are all lifted from South Beach.",
    },
    {
      q: "Is the Leonida map based on real geography?",
      a: "The plotted pins line up with real Florida landmarks — ports, old drive-ins, new-money shopping districts — and the map appears built from real satellite data and research, as Rockstar did for Los Santos and Liberty City.",
    },
  ],
  "lucia-jason-deep-dive": [
    {
      q: "Who are Lucia and Jason in GTA 6?",
      a: "They're GTA 6's dual protagonists — a Bonnie-and-Clyde-style criminal duo and the emotional core of the game. Across two trailers we've seen them act, but not yet reveal who they really are.",
    },
    {
      q: "What does Trailer 3 need to show about Lucia and Jason?",
      a: "A personal (non-heist) moment between them, individual agency where they disagree, a clear flaw or moral line one won't cross, and a hint at the thematic stakes of the ending.",
    },
    {
      q: "How much has Jason spoken in GTA 6 trailers?",
      a: "Fewer than ten words across the first two trailers — part of why their relationship still lacks texture heading into launch.",
    },
  ],
  "the-90-dollar-question": [
    {
      q: "How much will GTA 6 cost?",
      a: "Nothing is officially confirmed, but the base-case prediction is $90 for the standard edition (~60% likely), with $80 (~25%) and $70 (~5%) less likely. Take-Two has repeatedly telegraphed premium, value-based pricing.",
    },
    {
      q: "Why would GTA 6 be $90?",
      a: "Three reasons: Take-Two's 'pricing based on value delivered' earnings language, GTA's famously inelastic launch demand, and the chance for GTA 6 to set a new industry-wide $90 ceiling other publishers follow.",
    },
    {
      q: "What GTA 6 editions are expected?",
      a: "Likely three: Standard (~$90), Deluxe (~$120, adding a season pass and early Online content), and Ultimate (~$150 — multiple retailers have internally listed $149.99).",
    },
    {
      q: "Should I pre-order GTA 6 or wait?",
      a: "The analysis suggests pre-ordering the standard edition (the deluxe extras aren't worth the +$30), or waiting roughly six months for Take-Two's typical holiday sale that tends to drop the price to $59-69.",
    },
  ],
  "threat-assessment-online-migration": [
    {
      q: "Will GTA Online progress transfer to GTA 6?",
      a: "Almost certainly not — the analysis puts roughly 85% odds on no migration. A no-migration scenario projects about 2.3x the lifetime revenue of letting players carry over, which dominates the decision for a public company.",
    },
    {
      q: "Why won't my GTA Online money and characters carry over?",
      a: "Without migration, players re-buy the equivalent of what they had, driving more revenue. And if migration were happening, Rockstar would already be marketing it — as they did for GTA V to GTA Online in 2013. The silence is the signal.",
    },
    {
      q: "What should I do with my GTA Online money before GTA 6?",
      a: "Spend the in-game cash you've saved, finish crew-dependent content in the next ~90 days, stop buying shark cards (they won't transfer), and coordinate with your crew about reconstituting in GTA 6 Online.",
    },
    {
      q: "When is the best time to play GTA 6 Online?",
      a: "The first 30 days (November-December 2026). Everyone starts at zero, prices are at their lowest, payouts are most generous, and early money exploits appear — a one-time economic window that won't recur.",
    },
  ],
  "20-days-to-marketing": [
    {
      q: "When does GTA 6 marketing start?",
      a: "Take-Two CEO Strauss Zelnick signaled marketing begins 'when summer hits' — late June or early July 2026 at the latest, a notably specific window from a company that rarely commits to timing.",
    },
    {
      q: "What will GTA 6's summer marketing push include?",
      a: "Likely a cluster of three: Trailer 3 (real gameplay slices, more of Jason, second-city confirmation), pre-orders opening with a price reveal, and the full marketing machine — key art, TV spots, and social.",
    },
    {
      q: "When is GTA 6 Trailer 3 expected?",
      a: "Rockstar's pattern is one major trailer per year (December 2023, December 2025), so the next logical drop lands in the June-August window — late June is a credible earliest date, but Rockstar hasn't confirmed one.",
    },
  ],
  "trailer-3-predictions": [
    {
      q: "When is GTA 6 Trailer 3 coming out?",
      a: "Rockstar runs a one-trailer-per-year cadence (Trailer 1 in December 2023, Trailer 2 in December 2025), so Trailer 3 is expected somewhere between July and September 2026. No official date has been announced.",
    },
    {
      q: "What does GTA 6 Trailer 3 need to show?",
      a: "Five things: a real Lucia backstory beat, Jason speaking more than a few lines, confirmation of the inland second city, at least one start-to-finish gameplay mission, and one major new character (likely the antagonist).",
    },
    {
      q: "Will Trailer 3 reveal GTA 6's price or Online mode?",
      a: "Unlikely. The price gets its own separate news cycle rather than a trailer, the Online reveal is typically saved for after the single-player launch, and a PC date usually comes 6-12 months later.",
    },
  ],
  "discord-gta6-channel-signals": [
    {
      q: "What does Rockstar's GTA 6 Discord move mean?",
      a: "Rockstar quietly gave the GTA 6 channel its own elevated category on the official Discord — a low-key infrastructure move that typically precedes a content avalanche, lining up with the expected summer marketing push.",
    },
    {
      q: "Is the GTA 6 marketing push starting soon?",
      a: "The signals point that way: the Discord reorganization plus Take-Two CEO Strauss Zelnick's 'marketing when summer hits' comments suggest the first real wave — Trailer 3, pre-orders, and price clarity — is imminent (late June / early July).",
    },
    {
      q: "Does the Discord move hint at GTA 6 Online?",
      a: "Likely. The dedicated space probably doubles as a soft launchpad for cross-promoting GTA Online, teasing persistent systems like buyable businesses and the two-city economy built to run for a decade.",
    },
  ],
};
