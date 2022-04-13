import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAiHqR_B9eLXwwyp21vSN70DU2IDAMOwQ8",
    authDomain: "ema-john-simple-3d38f.firebaseapp.com",
    projectId: "ema-john-simple-3d38f",
    storageBucket: "ema-john-simple-3d38f.appspot.com",
    messagingSenderId: "790610962239",
    appId: "1:790610962239:web:1a67c7e35edacc2370d58a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;