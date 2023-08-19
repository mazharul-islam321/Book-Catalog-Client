// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBjW-zKG7KHlrbZP9_DhesMlW5Vy3yGi6I",
	authDomain: "book-catalog-ccc6f.firebaseapp.com",
	projectId: "book-catalog-ccc6f",
	storageBucket: "book-catalog-ccc6f.appspot.com",
	messagingSenderId: "330383752325",
	appId: "1:330383752325:web:5424ac4d456aa93a21bdec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
