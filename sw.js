// The Sheet: service worker. Its only job is reminders. It does not cache or change the site.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

// A reminder arrived from the Supabase job: show it.
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "The Sheet", {
    body: d.body || "", tag: d.tag || "pickem", data: { url: d.url || "./" }, icon: "icon-192.png", badge: "icon-192.png",
  }));
});

// Tapped: open The Sheet on that sport's unpicked games (reusing the app if it's already open).
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil((async () => {
    const open = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of open) {
      if (!c.url.startsWith(self.registration.scope)) continue;
      try { await c.navigate(url); return c.focus(); } catch { /* not ours to steer; open a new one */ }
    }
    return self.clients.openWindow(url);
  })());
});
