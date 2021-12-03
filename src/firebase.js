// import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDQR1eTapY2jDJX_OVO0AgRYQPgI9YgJhM',
  authDomain: 'react-slack-8ed42.firebaseapp.com',
  projectId: 'react-slack-8ed42"'
});

const db = getFirestore();


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
// //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDQR1eTapY2jDJX_OVO0AgRYQPgI9YgJhM",
//     authDomain: "react-slack-8ed42.firebaseapp.com",
//     projectId: "react-slack-8ed42",
//     storageBucket: "react-slack-8ed42.appspot.com",
//     messagingSenderId: "663292970597",
//     appId: "1:663292970597:web:13426eb99842d874d6688c",
//     measurementId: "G-X6K6J8HNHE"
//   };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  export default firebaseApp;
//   export default firebaseApp;