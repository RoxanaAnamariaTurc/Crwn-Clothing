import { initializeApp } from 'firebase/app';
import
{
    getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPNIbBpNFEv6VTPStytyCcoTbMp_PxEdY",
    authDomain: "crwn-clothing-db-86da8.firebaseapp.com",
    projectId: "crwn-clothing-db-86da8",
    storageBucket: "crwn-clothing-db-86da8.appspot.com",
    messagingSenderId: "950070454197",
    appId: "1:950070454197:web:0d95258df026cb841c1bfc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>
{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);

    if (!userSnapShot.exists())
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try
        {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error)
        {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}