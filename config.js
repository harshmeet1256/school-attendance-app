 import * as firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCqTvZNIIgiY6SAGg0W21XwAYmKCPaWYCY",
  authDomain: "school-attendance-app-e2543.firebaseapp.com",
  projectId: "school-attendance-app-e2543",
  storageBucket: "school-attendance-app-e2543.appspot.com",
  messagingSenderId: "893645656465",
  appId: "1:893645656465:web:3c5f676548ec728b5e4a30"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

  export default firebase.database()
 

  