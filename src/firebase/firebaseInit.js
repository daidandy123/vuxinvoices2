import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyABYuNIuXJUi8TwB5B7YTjN3Jyq8RXIOhE",
    authDomain: "vue3-edfa2.firebaseapp.com",
    projectId: "vue3-edfa2",
    storageBucket: "vue3-edfa2.appspot.com",
    messagingSenderId: "402950924345",
    appId: "1:402950924345:web:a895bc019b7aacd405c5e8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()