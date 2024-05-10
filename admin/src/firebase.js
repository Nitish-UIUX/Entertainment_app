// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCy4g7o5wEzOXJbMzzQbZ34naCVTUkrSzQ",
//   authDomain: "netflix-eb2a1.firebaseapp.com",
//   projectId: "netflix-eb2a1",
//   storageBucket: "netflix-eb2a1.appspot.com",
//   messagingSenderId: "222383651659",
//   appId: "1:222383651659:web:857d5e4192b67408ee86ce",
//   measurementId: "G-XQ6R9HDMNL"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const storage = getFirestore(firebaseApp);
// export default storage;


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCy4g7o5wEzOXJbMzzQbZ34naCVTUkrSzQ",
  authDomain: "netflix-eb2a1.firebaseapp.com",
  projectId: "netflix-eb2a1",
  storageBucket: "netflix-eb2a1.appspot.com",
  messagingSenderId: "222383651659",
  appId: "1:222383651659:web:857d5e4192b67408ee86ce",
  measurementId: "G-XQ6R9HDMNL"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getDatabase();

export default db;
