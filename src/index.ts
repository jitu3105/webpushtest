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

let sub: any = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cprCLshEwuY:APA91bFAXNMGtBzC01SkGxUPYlBvOMt6sOt0xvb5pilBj7erUSIhTiFtxl-BC1a3QL1Y8T78i-lalAw8rLPiZd-Pfguuw6ab38nt5jNPweVacV4pHi6SOH8t2VJKAAYyAUvIgyDU6H8D",
  expirationTime: null,
  keys: {
    p256dh:
      "BGklgcAN-V0VkMffbX1DOBGsyOfHg62VdXCfG_Jys4XtJ3I8zS74ZEg14EBd96roEmIDiDPHe2lqVBcsevuDonI",
    auth: "YT6sJd7MIUsV-aYbeh4AEg",
  },
};

push.sendNotification(sub, "test message");
