import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBl-w8Iggyh-bqvKWEZlwqq9m4qmL-8V2U',
    authDomain: 'winepro-17b61.firebaseapp.com',
    databaseURL: 'https://winepro-17b61.firebaseio.com',
    projectId: 'winepro-17b61',
    storageBucket: 'winepro-17b61.appspot.com',
    messagingSenderId: '123582272797',
    appId: '1:123582272797:web:e44c1a791daa12c72cbdf4',
    measurementId: 'G-SW4E4MNK9T',
  }
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
