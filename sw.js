self.addEventListener("push", (e) => {
  const data = JSON.parse(e.data.text());
  e.waitUntil(
    self.registration.showNotification(data.title, {
      icon: data.icon,
      body: data.body,
      data: { dateOfArrival: Date.now(), primaryKey: 2, url: data.url },
      vibrate: data.vibrate,
    })
  );
});
