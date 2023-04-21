


import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


 export function getFCMToken() {
    firebase.messaging().getToken({ vapidKey: "BEZbUPDv237uhVZ40nWS5dmHoNLKcJhrJRVIvhjAWHFX-DSWRHElA7eQpUB9A0ZqBa5usIlhyUpK8vgYACXCsgs"})
      .then((currentToken) => {
        if (currentToken) {
          console.log('FCM token:', currentToken);
          // send the token to your server to use for sending push notifications
        } else {
          console.log('No registration token available.');
        }
      })
      .catch((error) => {
        console.log('An error occurred while retrieving the FCM token:', error);
      });
  }
  



