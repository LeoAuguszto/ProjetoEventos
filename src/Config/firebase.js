
import * as firebase  from 'firebase/app';
require('firebase/firestore')
require ('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyB6QF99Gzr9zkhev-B6pvqYDdrAQ9qgKeE",
  authDomain: "bancoreact-96f92.firebaseapp.com",
  databaseURL: "https://bancoreact-96f92-default-rtdb.firebaseio.com",
  projectId: "bancoreact-96f92",
  storageBucket: "bancoreact-96f92.appspot.com",
  messagingSenderId: "594548091486",
  appId: "1:594548091486:web:84472f1faa4a84cf2862cf"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore
const auth = app.auth

export { auth };
export default db; 

