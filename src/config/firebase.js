
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVwCREtcNTFgYZE3k_hp-XajwVHr0uh4k",
  authDomain: "uynite-agumentik.firebaseapp.com",
  projectId: "uynite-agumentik",
  storageBucket: "uynite-agumentik.appspot.com",
  messagingSenderId: "1074619514298",
  appId: "1:1074619514298:web:74d03c30f979660dfcf183",
  measurementId: "G-SVVY5L5ZTH"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;

// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyDyUX4gM6ZfbKC7F2Fa-ILNOMuPi4kiR04",
//   authDomain: "notificaton-token.firebaseapp.com",
//   projectId: "notificaton-token",
//   storageBucket: "notificaton-token.appspot.com",
//   messagingSenderId: "288783732612",
//   appId: "1:288783732612:web:8144c819211bb720b217d1",
//   measurementId: "G-DSFPXMN3DX",
// };


// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);

// // Request permission to show notifications
// export const requestNotificationPermission = async () => {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       getFCMToken();
//     }
//   } catch (error) {
//     console.error("Error requesting notification permission:", error);
//   }
// };

// // Get registration token for Firebase Cloud Messaging
// const getFCMToken = async () => {
//   try {
//     const currentToken = await getToken(messaging);
//     if (currentToken) {
//       console.log("FCM token:", currentToken);
//       // TODO: Send the token to your server
//     } else {
//       console.log("No registration token available. Request permission to generate one.");
//     }
//   } catch (error) {
//     console.error("Error retrieving FCM token:", error);
//   }
// };

