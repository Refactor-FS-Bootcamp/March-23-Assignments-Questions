import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0pT4rV3tAIo4pvS1_26M_SsAbnOOffbw",
    authDomain: "drive-mar.firebaseapp.com",
    projectId: "drive-mar",
    storageBucket: "drive-mar.appspot.com",
    messagingSenderId: "689354743381",
    appId: "1:689354743381:web:e4ca4be2071b7d90137edc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }