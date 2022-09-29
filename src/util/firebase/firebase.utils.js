import { initializeApp } from 'firebase/app';
import { 
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
    }  from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABtsB07ifTSmv53sZzhd8APFdysclFPPo",
    authDomain: "apex-db-29552.firebaseapp.com",
    projectId: "apex-db-29552",
    storageBucket: "apex-db-29552.appspot.com",
    messagingSenderId: "632548547831",
    appId: "1:632548547831:web:8a98d3701db424f47fc7f2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithPopup =  () => signInWithPopup(auth, provider);