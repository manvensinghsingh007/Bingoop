import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV6_E04DVerR2vCY_s1eoct7_ZArmpGbo",
  authDomain: "instagram-3767f.firebaseapp.com",
  projectId: "instagram-3767f",
  storageBucket: "instagram-3767f.appspot.com",
  messagingSenderId: "1049125406171",
  appId: "1:1049125406171:web:7c669c719fb0e4c29593fe",
  measurementId: "G-KEP5V0H3KZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()