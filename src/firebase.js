// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBgJXLdG3Fzu_RJDZL0g5TZPR-mulIEzI",
  authDomain: "hwitter-clone.firebaseapp.com",
  projectId: "hwitter-clone",
  storageBucket: "hwitter-clone.appspot.com",
  messagingSenderId: "761713218568",
  appId: "1:761713218568:web:5ce90a2422a62c01446dbd"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);