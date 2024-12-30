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
    "https://fcm.googleapis.com/fcm/send/fSyvomAI7EE:APA91bGYmNQN9TeMzxgTjPJQEjPewQq1O_z92e0PKes3rkEqKEv5YN7J14fUKM5GMfbPANdSUVsB9osxYYHKo3EGNuCLZsa7GovBofP41713ffnWRWpvQkDRKZeQTPOYfb0O5zoDDOnn",
  expirationTime: null,
  keys: {
    p256dh:
      "BAGFLSI6P6Z9bbpCY6mK1kRFxzhhjhrQe-qTz85yv5Mxnbwr2v6OPPPXIjY4agiJU_TeEFvfln-d8WVSTubTwMs",
    auth: "s-150pcAO2VwIXd9I7nyfA",
  },
};

push.sendNotification(sub, "test message");
