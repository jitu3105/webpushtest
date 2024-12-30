import push from "web-push";
// const vapIdKeys = push.generateVAPIDKeys();
const vapIdKeys = {
  publicKey:
    "BJUrY1flfAqwPKCmXoIo8no9tihOg0jFF9UyVRk3C0ih4QC9XyoSN6jt9lOzBbDEdJqfgQaMZZNj13f_YVDVULw",
  privateKey: "sPtz_3MZWslQ8kuGyKRxGLs43mQNC6u85gqGpZdDTCk",
};

console.log(vapIdKeys);

push.setVapidDetails(
  "mailto:jalaj@fleetrf.com",
  vapIdKeys.publicKey,
  vapIdKeys.privateKey
);

let subs = [
  {
    endpoint:
      "https://fcm.googleapis.com/fcm/send/cprCLshEwuY:APA91bFAXNMGtBzC01SkGxUPYlBvOMt6sOt0xvb5pilBj7erUSIhTiFtxl-BC1a3QL1Y8T78i-lalAw8rLPiZd-Pfguuw6ab38nt5jNPweVacV4pHi6SOH8t2VJKAAYyAUvIgyDU6H8D",
    expirationTime: null,
    keys: {
      p256dh:
        "BGklgcAN-V0VkMffbX1DOBGsyOfHg62VdXCfG_Jys4XtJ3I8zS74ZEg14EBd96roEmIDiDPHe2lqVBcsevuDonI",
      auth: "YT6sJd7MIUsV-aYbeh4AEg",
    },
  },
  {
    endpoint:
      "https://fcm.googleapis.com/fcm/send/czdqC2ZCJzc:APA91bElbb8vT5-rCvsdznrK8q6PJF6s6DZ8C891IuhF__5vFNyHIR7Zww638EvUw3PpxyYW8uEnwpYXc5vTmwDy-etSVwViRMqA67CGxgh7hjAyQTGvYu49iKsT4m2VqpMRR3Ndf-rR",
    expirationTime: null,
    keys: {
      p256dh:
        "BL3gcekEpSe0W0NFjFR7tKwPo-g3FeXE3sar_uSPcCbcBDwffPfI7dXLyxMm1AEjR1vfg9BgXzaOL97P15kv_Ts",
      auth: "X4woets9CK918_YnKThw8w",
    },
  },
];
subs.map((sub) => {
  const data = JSON.stringify({
    icon: "https://astonishing-kulfi-ecbda1.netlify.app/logo.jpg",
    title: "ye dekho paji!",
    body: "yehe..!!! click karke link bhi khol sakte he ",
    vibrate: [100, 50, 100],
    actions: [
      { icon: "/logo.jpg", action: "explore", title: "Open" },
      { icon: "/logo.jpg", action: "close", title: "Close" },
    ],
    url: "https://www.youtube.com/watch?v=TFIpNcdPa98",
  });
  push.sendNotification(sub, data).catch((err) => {
    console.log(err);
  });
});
