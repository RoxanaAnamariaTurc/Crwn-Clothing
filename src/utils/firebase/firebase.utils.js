import { initializeApp } from 'firebase/app';
import
{
    getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>
{
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);


    if (!userSnapShot.exists())
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try
        {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error)
        {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) =>
{
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>
{
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}