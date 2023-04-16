// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCGZzPwkabWGEs8Tut88LsMSeG06TJ39F0',
	authDomain: 'elred-clone.firebaseapp.com',
	projectId: 'elred-clone',
	storageBucket: 'elred-clone.appspot.com',
	messagingSenderId: '592133396462',
	appId: '1:592133396462:web:3de3ce920e4c4fa219a0ff',
	measurementId: 'G-99RHG3C9Z9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
