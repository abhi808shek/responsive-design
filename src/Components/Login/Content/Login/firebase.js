

//   import { initializeApp } from "firebase/app";
//   import { getAuth, signInWithPhoneNumber } from "firebase/auth";

//   const firebaseConfig = {
//     apiKey: "AIzaSyDyUX4gM6ZfbKC7F2Fa-ILNOMuPi4kiR04",
//     authDomain: "notificaton-token.firebaseapp.com",
//     projectId: "notificaton-token",
//     storageBucket: "notificaton-token.appspot.com",
//     messagingSenderId: "288783732612",
//     appId: "1:288783732612:web:8144c819211bb720b217d1",
//     measurementId: "G-DSFPXMN3DX",
//   };


// const auth = getAuth();


// const app = initializeApp(firebaseConfig);

// export function sendOTP(phoneNumber) {
//     const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // OTP sent successfully
//         console.log("OTP SENT SUCESSFULLY");
//         const verificationId = confirmationResult.verificationId;
//         // Store the verification ID to use in the next step
//         console.log("verificationId",verificationId);
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   }
  


// export default app;
