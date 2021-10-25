import firebase from "firebase";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyALmKx6VOuHh4RgtFCbyzIG6K8spulAKEE",
  authDomain: "hostelappprak.firebaseapp.com",
  projectId: "hostelappprak",
  storageBucket: "hostelappprak.appspot.com",
  messagingSenderId: "752356192261",
  appId: "1:752356192261:web:479fd9630931c994f26c6c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();