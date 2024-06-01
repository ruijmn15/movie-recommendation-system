import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
apiKey: "AIzaSyAxFUjsXvQQzwzFlVtetdzkErj1eKyOzQc",
  authDomain: "movie-recommendation-sys-b16ba.firebaseapp.com",
  projectId: "movie-recommendation-sys-b16ba",
  storageBucket: "movie-recommendation-sys-b16ba.appspot.com",
  messagingSenderId: "86831956142",
  appId: "1:86831956142:web:9cdbb0af24a8a5197c6d3f",
  measurementId: "G-L8TKB1GJV7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions, app };

