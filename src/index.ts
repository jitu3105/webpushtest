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
      "https://fcm.googleapis.com/fcm/send/f_dpO39u5DI:APA91bHkFMGzzXYKbSVgjjUkv88AETBqjrPPU0Kelu7WRsro2qM6w0_cwIx4YBDxKzhmBIMAS-0cC-qaeG_7vNfNhodazbMvBR7N9s_rLk2aQnm9Qa5S-1Hou1bCtor9slR4RGkyVckM",
    expirationTime: null,
    keys: {
      p256dh:
        "BDhHyp5H_t_u1UCjU8ktT8rbsVr461I7ItFC9H8YvhEor2_gX9rp2P_DN4VUf-B5hEWak-F2RuPkA6_ekD0FPMY",
      auth: "ce9sCQeVoNdIXJdkmJv1ig",
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
  });
  push.sendNotification(sub, data).catch((err) => {
    console.log(err);
  });
});
