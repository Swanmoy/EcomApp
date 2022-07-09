import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_IvnvVLlQXXy0lQrsLIIipAQVU4E6imw",
  authDomain: "ecomapp-78a92.firebaseapp.com",
  projectId: "ecomapp-78a92",
  storageBucket: "ecomapp-78a92.appspot.com",
  messagingSenderId: "972167490200",
  appId: "1:972167490200:web:e34f5bc295fe6d57e47eed",
  measurementId: "G-292LJ4WR7G",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
