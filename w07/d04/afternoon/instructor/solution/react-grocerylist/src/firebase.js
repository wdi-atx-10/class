// Initialize Firebase
import firebase from 'firebase';
import dotenv from 'dotenv';

dotenv.config()
const config = {
   apiKey: "AIzaSyDjTxRYckZvCRhEmfsVTvtPLNnZMQKvNjg",
   authDomain: "grocerylist-dev.firebaseapp.com",
   databaseURL: "https://grocerylist-dev.firebaseio.com",
   projectId: "grocerylist-dev",
   storageBucket: "grocerylist-dev.appspot.com",
   messagingSenderId: "339055522328"
 };

 firebase.initializeApp(config);

 export default firebase;
