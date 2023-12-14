import { initializeApp } from 'firebase/app'
import {
    collection,
    getFirestore,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCze7kRLgxutJc8lmIo_CzhADVRo8oOUFw",
  authDomain: "best-of-23.firebaseapp.com",
  projectId: "best-of-23",
  storageBucket: "best-of-23.appspot.com",
  messagingSenderId: "467880063567",
  appId: "1:467880063567:web:3257bf70e26119a29f303a",
  measurementId: "G-0CVED5TPDJ"
};

initializeApp(firebaseConfig)

  //init services
export const db = getFirestore()

//collection ref
export const Albums23ref = collection(db, 'Best_Albums_2023')
 