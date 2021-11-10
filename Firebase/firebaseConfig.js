// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2mjy3DRiaw8O-KEd3Pv0oux4yjns9208",
    authDomain: "moayuchatroom.firebaseapp.com",
    databaseURL: "https://moayuchatroom-default-rtdb.firebaseio.com",
    projectId: "moayuchatroom",
    storageBucket: "moayuchatroom.appspot.com",
    messagingSenderId: "527322579674",
    appId: "1:527322579674:web:93f58f1938e910b8f7dbe3",
    measurementId: "G-RG5MY4T5Q5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firenaseInstance = fierbase;
export const authService = firebase.auth();