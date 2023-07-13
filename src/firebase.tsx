// Import the functions you need from the SDKs you need
import {projectKey, firebaseConfigEncryp} from "./env";
import  { decrypt } from "./Class/Utils";
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: decrypt(firebaseConfigEncryp.apiKey, projectKey),
    authDomain: decrypt(firebaseConfigEncryp.authDomain, projectKey),
    databaseURL:decrypt(firebaseConfigEncryp.databaseURL, projectKey),
    projectId: decrypt(firebaseConfigEncryp.projectId, projectKey),
    storageBucket: decrypt(firebaseConfigEncryp.storageBucket, projectKey),
    messagingSenderId: decrypt(firebaseConfigEncryp.messagingSenderId, projectKey),
    appId: decrypt(firebaseConfigEncryp.appId, projectKey),
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
