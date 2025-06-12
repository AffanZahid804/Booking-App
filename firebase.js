
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCcG_Y4nZK-JmlG8fvKbBaw6cb2I8l9gmc",
  authDomain: "booking-project-f002a.firebaseapp.com",
  projectId: "booking-project-f002a",
  storageBucket: "booking-project-f002a.appspot.com",
  messagingSenderId: "576128010085",
  appId: "1:576128010085:web:5ec621ab71681419f4438c",
  measurementId: "G-K5VH7MBQ3G"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};