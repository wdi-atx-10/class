import firebase from 'firebase';

// Initialize Firebase
 const config = {
   apiKey: "AIzaSyDp8Aheg_0fIy74kxHEpjbEVOcYd0BqgDQ",
   authDomain: "grocery-list-2e5bd.firebaseapp.com",
   databaseURL: "https://grocery-list-2e5bd.firebaseio.com",
   projectId: "grocery-list-2e5bd",
   storageBucket: "grocery-list-2e5bd.appspot.com",
   messagingSenderId: "422339058697"
 };
 
 firebase.initializeApp(config);

 export default firebase;
