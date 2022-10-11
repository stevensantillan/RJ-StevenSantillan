import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfapSofzyrBq9sZRNqx2g7srdJBGb9sMY",
    authDomain: "nikestore-rj-stevensantillan.firebaseapp.com",
    projectId: "nikestore-rj-stevensantillan",
    storageBucket: "nikestore-rj-stevensantillan.appspot.com",
    messagingSenderId: "393231001370",
    appId: "1:393231001370:web:7f639db4a9033c8d61aea3"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)
