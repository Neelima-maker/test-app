import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrjizZGBnUwhZjWUhjKBO6zFuKiaO3aR8",
  authDomain: "quiz-buzzer-app-1e328.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-app-1e328-default-rtdb.firebaseio.com",
  projectId: "quiz-buzzer-app-1e328",
  storageBucket: "quiz-buzzer-app-1e328.appspot.com",
  messagingSenderId: "182312586628",
  appId: "1:182312586628:web:411c54f2e52dbf616ba1d1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();