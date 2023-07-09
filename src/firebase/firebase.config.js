// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT_DyNSIhIkgapAcxP17yROONVdcMHD3U",
  authDomain: "jsi07-62405.firebaseapp.com",
  projectId: "jsi07-62405",
  storageBucket: "jsi07-62405.appspot.com",
  messagingSenderId: "146971067199",
  appId: "1:146971067199:web:8bf0c2b27c2328862b498a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) 

export const SONGS_COLLECTION = 'Songs'
export const PLAYERS_COLLECTION = 'Players'

export const CHAT_ROOM = 'ChatRoom'



export const actionCodeSettings = {
    url: 'http://127.0.0.1:5173/',
    handleCodeInApp: true,
  }