// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_R2Pk5QyFFK2iju5JGImGfL6JBcbeWLc",
  authDomain: "perfume-ware-house-assignment.firebaseapp.com",
  projectId: "perfume-ware-house-assignment",
  storageBucket: "perfume-ware-house-assignment.appspot.com",
  messagingSenderId: "220476971689",
  appId: "1:220476971689:web:df68d19e6302a1fd74e7b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 export default auth;