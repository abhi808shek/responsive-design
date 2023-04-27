// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAcJzppx6PHvFiGQlP3HXcC21cgDATqAoE",
//   authDomain: "uynite-inc.firebaseapp.com",
//   databaseURL: "https://uynite-inc-default-rtdb.firebaseio.com",
//   projectId: "uynite-inc",
//   storageBucket: "uynite-inc.appspot.com",
//   messagingSenderId: "48084742080",
//   appId: "1:48084742080:web:499527de558e0e3e08e225",
//   measurementId: "G-2WD1HF0SLM"
// };



// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp)
export const auth = getAuth(firebaseApp)
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

