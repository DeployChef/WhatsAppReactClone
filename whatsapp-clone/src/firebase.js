import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzBVCf9QXByYhsnkdvIqBg23oj0cVjUU0",
  authDomain: "whatsappreactjsclone.firebaseapp.com",
  databaseURL: "https://whatsappreactjsclone.firebaseio.com",
  projectId: "whatsappreactjsclone",
  storageBucket: "whatsappreactjsclone.appspot.com",
  messagingSenderId: "780962329706",
  appId: "1:780962329706:web:6d4d1cd5b40992acb1c613",
  measurementId: "G-J3M7GJMDL3"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider }