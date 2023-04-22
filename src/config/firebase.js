
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

