// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-YLvBZu32tdGW8DCHVHkhbtIkSzD--Y0",
  authDomain: "account-9ae0b.firebaseapp.com",
  projectId: "account-9ae0b",
  storageBucket: "account-9ae0b.appspot.com",
  messagingSenderId: "601975977658",
  appId: "1:601975977658:web:72a40258613b507cab3483",
  measurementId: "G-Y562XSD93X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);