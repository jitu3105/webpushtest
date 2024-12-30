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
      "https://fcm.googleapis.com/fcm/send/dSbFnLCc2lo:APA91bEoDlIdauXmtIomV-QFYaIMWJyM3-cBwnPgJ5bXIDdzBNQLBtm-CJr4uqmlgPAeR_A3Z6smybsKPNd2Bj2fN36KttHSgW29anmZ799smNvvALltaL3e6lIE6LFTJTY9oYG0XTHv",
    expirationTime: null,
    keys: {
      p256dh:
        "BOyXRj3YY2ndLUN4nE2mOYPCjzVa7CxeWjrxcCJlqnKAp-L89x8esc0w3M7HNHOyVQdd65JtGXcPy3KvConTGg4",
      auth: "857CEQXUtV_6LPikNFUX0g",
    },
  },
  {
    endpoint:
      "https://fcm.googleapis.com/fcm/send/cH1EIlnl_xQ:APA91bH9v_QunK78rQF9JdfzJPlOBf1GJFwpLVzMtzjCsHwVQbH28Bm9UAPLEYSl_pjcL6NFEy667j-tzKnZC1kkYgbogtCS0FJGGXVu_7L3f87y5oV8cPDxlhcEWGQV2a93ibx1qxLv",
    expirationTime: null,
    keys: {
      p256dh:
        "BLCsyY7ZNatJrF6oYXDuemly1bvkfV0iIbGeYRY7ot60Smf4E2hF3VrZG40r74hh0-MHqunpkhZjMSyWdEIaN8E",
      auth: "yZizptlFV8n7KRBzhZDQTQ",
    },
  },
];
subs.map((sub) => {
  const data = JSON.stringify({
    icon: "https://astonishing-kulfi-ecbda1.netlify.app/logo.jpg",
    title: "ye dekho paji!",
    body: "yehe..!!! click karke link bhi khol sakte he ",
    // vibrate: [100, 50, 100],
    // actions: [
    //   { icon: "/logo.jpg", action: "explore", title: "Open" },
    //   { icon: "/logo.jpg", action: "close", title: "Close" },
    // ],
    url: "https://www.youtube.com/watch?v=TFIpNcdPa98",
  });
  push.sendNotification(sub, data).catch((err) => {
    console.log(err);
  });
});
