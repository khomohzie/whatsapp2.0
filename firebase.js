import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-6Z4qhUhNjRWxRw7GfSJiRrqNsMCJCGY",
    authDomain: "whatsapp-f55ae.firebaseapp.com",
    projectId: "whatsapp-f55ae",
    storageBucket: "whatsapp-f55ae.appspot.com",
    messagingSenderId: "860628323918",
    appId: "1:860628323918:web:a9fc1692d938f19607bd1f",
    measurementId: "G-GL4MDDPC96"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };