import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDQR1eTapY2jDJX_OVO0AgRYQPgI9YgJhM",
  authDomain: "react-slack-8ed42.firebaseapp.com",
  databaseURL: "https://react-slack-8ed42-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-slack-8ed42",
  storageBucket: "react-slack-8ed42.appspot.com",
  messagingSenderId: "663292970597",
  appId: "1:663292970597:web:13426eb99842d874d6688c",
  measurementId: "G-X6K6J8HNHE"
};
firebase.initializeApp(firebaseConfig)

export default firebase

