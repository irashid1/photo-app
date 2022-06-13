// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBJ8qGrtVHkq2p57GXawwK63v7t473WiiI",
    authDomain: "photo-app-40b0e.firebaseapp.com",
    projectId: "photo-app-40b0e",
    storageBucket: "photo-app-40b0e.appspot.com",
    messagingSenderId: "541485290871",
    appId: "1:541485290871:web:59564375ffdac475b17d72"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const instagramDatabase = getDatabase(firebase);

export default firebase;