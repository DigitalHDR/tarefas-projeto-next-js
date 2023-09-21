import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBVWauzR_jtWotje6eiMDDrJHfQljaDKEA',
  authDomain: 'tarefaplus-93e6c.firebaseapp.com',
  projectId: 'tarefaplus-93e6c',
  storageBucket: 'tarefaplus-93e6c.appspot.com',
  messagingSenderId: '828431287418',
  appId: '1:828431287418:web:f9657d9c521671aeac27c3',
}

// Initialize Firebase
const firebaseAapp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseAapp)
export { db }
