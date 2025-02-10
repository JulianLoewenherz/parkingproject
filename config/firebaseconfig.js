import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Don't share
const firebaseConfig = {
    apiKey: "AIzaSyDbh71Ja316s0ImzqfAsUH3I_AGPJg23Js",
    authDomain: "parkingproject-4d496.firebaseapp.com",
    projectId: "parkingproject-4d496",
    storageBucket: "parkingproject-4d496.firebasestorage.app",
    messagingSenderId: "596762976106",
    appId: "1:596762976106:web:05e00d3db59e595e4b8f13",
    measurementId: "G-CDHVTGN6ZK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, auth, storage, firestore };