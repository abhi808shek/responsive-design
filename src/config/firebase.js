// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


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
export const messaging = getMessaging(firebaseApp)
export default firebaseApp;


export const getFirebaseToken = () => {
  console.log('gettttttttttttttttttttt');
  return getToken(messaging, { vapidKey: "BFfxjyp1NPxA_pP2eIkRKVrLVC0H73fl-5yTcfc9z8ritGGkQ3HydFV309SArvwHT58k19t6OS8h2y76KXo74uc"})
}


// Get registration token for Firebase Cloud Messaging
export const getFCMToken = async () => {
  try {
    const currentToken = await getToken(messaging);
    if (currentToken) {
      console.log("FCM token:", currentToken);
      // TODO: Send the token to your server
    } else {
      console.log("No registration token available. Request permission to generate one.");
    }
  } catch (error) {
    console.error("Error retrieving FCM token:", error);
  }
};

