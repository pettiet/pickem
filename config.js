// ─── Family Pick'em configuration ───────────────────────────────────────────
// Edit these values, save, and push. Nothing else needs to change.

window.PICKEM_CONFIG = {
  // Shown in the header
  TITLE: "The Sheet",
  SEASON: 2026,

  // Everyone who plays. Tap-to-select, no passwords.
  PLAYERS: ["Nick", "Ashley", "Andrew"],

  // Supabase → Project Settings → General → "Project URL"
  SUPABASE_URL: "https://nrhfxnjfsydiqqavjzpr.supabase.co",
  // Supabase → Project Settings → API Keys → "Publishable key" (starts with sb_publishable_)
  SUPABASE_KEY: "sb_publishable_LJYRfHkubA3ZW1TZRGDQGg_o4DdACxg",

  // Keep other people's picks hidden until a game kicks off (no copying!)
  HIDE_PICKS_UNTIL_KICKOFF: true,

  // ESPN group 80 = all FBS. (Power 4 example: use conference filters in code.)
  ESPN_GROUP: 80,
};
