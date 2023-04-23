importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


const firebaseConfig = {

  apiKey: "AIzaSyDVwCREtcNTFgYZE3k_hp-XajwVHr0uh4k",

  authDomain: "uynite-agumentik.firebaseapp.com",

  projectId: "uynite-agumentik",

  storageBucket: "uynite-agumentik.appspot.com",

  messagingSenderId: "1074619514298",

  appId: "1:1074619514298:web:74d03c30f979660dfcf183",

  measurementId: "G-SVVY5L5ZTH"

};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message "
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open("SH-V1");
//   await cache.addAll(resources);
// };
// /* eslint-disable-next-line no-restricted-globals */
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     addResourcesToCache([
//       "/",
//       "/index.html",
//       "/static/js/bundle.js"
//     ])
//   );
// });