import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBKZ7B6ZD-MzMQOnMB2WMMgaS02uuN0tOY",
  authDomain: "tap-restaurant-1.firebaseapp.com",
  databaseURL: "https://tap-restaurant-1.firebaseio.com",
  projectId: "tap-restaurant-1",
  storageBucket: "tap-restaurant-1.appspot.com",
  messagingSenderId: "1048624224846"
};

firebase.initializeApp(config);

export default firebase;
