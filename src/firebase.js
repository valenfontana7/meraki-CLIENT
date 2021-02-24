import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCBc3WENgoYfjb6Zd91W4Q5r77tsRmunZY",
  authDomain: "meraki-3e47a.firebaseapp.com",
  projectId: "meraki-3e47a",
  storageBucket: "meraki-3e47a.appspot.com",
  messagingSenderId: "565949756094",
  appId: "1:565949756094:web:b306337bf39c9c9097e4ef",
  measurementId: "G-9XRVEH9L2B",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
//firebase.analytics();
