import firebase from 'firebase/app';
import 'firebase/firestore'; //para la base de datos
import 'firebase/auth'; // interaccion con la informacion del usuario

const firebaseConfig = {
    apiKey: "AIzaSyCJCPxJZisx0bCarGLCSEzRKY0ob5qx3Ck",
    authDomain: "authfirebase-1bbb8.firebaseapp.com",
    projectId: "authfirebase-1bbb8",
    storageBucket: "authfirebase-1bbb8.appspot.com",
    messagingSenderId: "862675288550",
    appId: "1:862675288550:web:c7181dae5ad0dd198b5627"
  };

  //Iniciar Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); //Vamos a poder acceder a la base de datos
  const auth = firebase.auth(); ///Vamos a poder acceder a la informacion del usuario

  export {db, auth}