import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'API',
  authDomain: 'example.com',
  databaseURL: 'https://expo-sample.firebaseio.com',
  projectId: 'projectId',
  storageBucket: 'example.com',
  messagingSenderId: 'ID',
  appId: 'ID',
  measurementId: 'ID'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
