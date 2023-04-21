// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDyUX4gM6ZfbKC7F2Fa-ILNOMuPi4kiR04",
  authDomain: "notificaton-token.firebaseapp.com",
  projectId: "notificaton-token",
  storageBucket: "notificaton-token.appspot.com",
  messagingSenderId: "288783732612",
  appId: "1:288783732612:web:8144c819211bb720b217d1",
  measurementId: "G-DSFPXMN3DX"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);