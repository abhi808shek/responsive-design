import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


export function getFCMToken() {
  getToken(messaging, { vapidKey: "BEZbUPDv237uhVZ40nWS5dmHoNLKcJhrJRVIvhjAWHFX-DSWRHElA7eQpUB9A0ZqBa5usIlhyUpK8vgYACXCsgs" })
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