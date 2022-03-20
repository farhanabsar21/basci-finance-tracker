import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD7oddCbg_7nAvbuXeGeoBD4xmCSHjbizo",
    authDomain: "transaction-e97bf.firebaseapp.com",
    projectId: "transaction-e97bf",
    storageBucket: "transaction-e97bf.appspot.com",
    messagingSenderId: "1011857138025",
    appId: "1:1011857138025:web:4072735f30977d1011ddf8"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }