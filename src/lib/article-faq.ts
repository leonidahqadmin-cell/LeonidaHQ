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
};
