// ─── Family Pick'em configuration ───────────────────────────────────────────
// Edit these values, save, and push. Nothing else needs to change.

window.PICKEM_CONFIG = {
  // Shown in the header
  TITLE: "The Sheet",
  SEASON: 2026,

  // Everyone who plays. Tap-to-select, no passwords.
  PLAYERS: ["Nick", "Ashley", "Andrew"],

  // Supabase → Project Settings → General → "Project URL"
  SUPABASE_URL: "https://YOUR-PROJECT-ID.supabase.co",
  // Supabase → Project Settings → API Keys → "Publishable key" (starts with sb_publishable_)
  SUPABASE_KEY: "sb_publishable_PASTE-YOURS-HERE",

  // Private links: when SECURE_MODE is true, picking requires a personal link
  // (…/?key=XXXX). Only fingerprints of the keys live here, not the keys themselves.
  SECURE_MODE: true,
  TOKEN_HASHES: {
    "8241f81c87a14ecdc0a3ccb2987b3ed607fed7bdce45f755d7af6ec3b53d1811": "Nick",
    "efda02636c391c398756fa94284eb5ca97bdcdcb3480b9e8c1cb1ea1a11e9d6c": "Ashley",
    "a009dc6eb54a30d5ecf90b5655a0e8aa9cd8f580775eeba9c83fca4de7f28f64": "Andrew"
  },

  // Keep other people's picks hidden until a game kicks off (no copying!)
  HIDE_PICKS_UNTIL_KICKOFF: true,

  // Games before this date/time (local) are shown as "Week 0". ESPN lumps them into Week 1.
  WEEK0_END: "2026-09-01T00:00:00",

  // ESPN group 80 = all FBS. (Power 4 example: use conference filters in code.)
  ESPN_GROUP: 80,
};
