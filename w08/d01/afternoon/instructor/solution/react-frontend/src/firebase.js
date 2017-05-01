import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAyZgJ86VtA2kYLOzitANLLHke9qtWzSnI",
    authDomain: "friendlychat-fb223.firebaseapp.com",
    databaseURL: "https://friendlychat-fb223.firebaseio.com",
    projectId: "friendlychat-fb223",
    storageBucket: "friendlychat-fb223.appspot.com",
    messagingSenderId: "402125791835"
  };

firebase.initializeApp(config);

export default firebase;
