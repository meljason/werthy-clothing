import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAjielsArSIG8wOWw3NiD0Y87px03xRDto',
  authDomain: 'werthy-clothing.firebaseapp.com',
  projectId: 'werthy-clothing',
  storageBucket: 'werthy-clothing.appspot.com',
  messagingSenderId: '1589248096',
  appId: '1:1589248096:web:7691c6b2603bbabb800305',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
