import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCaQP15QfjUtbnDr7oHpHOKpr2h3fB_EyM",
    authDomain: "disney-plus-012.firebaseapp.com",
    databaseURL: "https://disney-plus-012-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disney-plus-012",
    storageBucket: "disney-plus-012.appspot.com",
    messagingSenderId: "279293584722",
    appId: "1:279293584722:web:1b3eb2d1b74535eff7068b",
    measurementId: "G-9LTW531HPR"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth  = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;