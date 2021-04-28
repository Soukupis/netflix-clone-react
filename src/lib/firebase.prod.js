import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDvYaS5EFK2teAUGMa9gP1UzW-b9DypAEw",
  authDomain: "netflix-clone-7e9f4.firebaseapp.com",
  projectId: "netflix-clone-7e9f4",
  storageBucket: "netflix-clone-7e9f4.appspot.com",
  messagingSenderId: "950953260320",
  appId: "1:950953260320:web:f786cb427e56952a09d345",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
