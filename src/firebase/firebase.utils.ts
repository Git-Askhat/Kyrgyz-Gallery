import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

const config = {
  apiKey: 'AIzaSyCLfAFAoNW9n69HR4uUdJCAgNeMfJnJpqM',
  authDomain: 'kyrgyz-gallery.firebaseapp.com',
  projectId: 'kyrgyz-gallery',
  storageBucket: 'kyrgyz-gallery.appspot.com',
  messagingSenderId: '526033233417',
  appId: '1:526033233417:web:e67522e9933187b4553ad8',
  measurementId: 'G-QN1QM39Q8K',
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any
) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const postRef = firestore.doc(`posts`);

  
  const snapShot = await userRef.get();
  // const postSnapShot = await postRef.get();
  
  // console.log("PostRef: ", postSnapShot);
  console.log("My snap_shot: ", snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createAt,
        ...additionalData
      })
    } catch (error: any) {
        console.log("Error message: ", error.message); 
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


export const app = firebase.initializeApp(config);
 export const storage = getStorage(app);
 
export const db = getFirestore(app);
