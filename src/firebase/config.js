import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOsHIO69bSDqLErr6dxU6LETQpYBRtqTk",
  authDomain: "react2-lesson8-d70ee.firebaseapp.com",
  projectId: "react2-lesson8-d70ee",
  storageBucket: "react2-lesson8-d70ee.appspot.com",
  messagingSenderId: "120683685653",
  appId: "1:120683685653:web:6d086f0ed2aef851406b1c"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

 export const db = getFirestore(app);
