self.addEventListener("push", (e) => {
  const data = JSON.parse(e.data.text());
  e.waitUntil(
    self.registration.showNotification(data.title, {
      icon: data.icon,
      body: data.body,
      timestamp: Date.now(),
      data: { url: data.url },
      // actions: data.actions,
      vibrate: [200, 100, 200],
    })
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
