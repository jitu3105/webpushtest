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

let sub: any = {};

push.sendNotification(sub, "test message");
