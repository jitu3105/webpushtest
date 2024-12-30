self.addEventListener("push", (e) => {
  const data = JSON.parse(e.data.text());
  const notification = e.waitUntil(
    self.registration.showNotification(data.title, {
      icon: data.icon,
      body: data.body,
      data: { dateOfArrival: Date.now(), primaryKey: 2 },
      actions: data.actions,
      vibrate: data.vibrate,
    })
  );
  console.log(notification);
  notification.addEventListener("click", (event) => {
    const action = event.action;
    if (action === "explore") {
      clients.openWindow(data.url); // Use clients API to open URL
      // Handle the action click event (e.g., open a specific webpage or close the notification)
      console.log("Notification action clicked:", action);
      // You can access additional information from the event object here
    } else if (action === "close") {
      notification.close();
    }
  });
});
