import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBB-OcFMd68Ek4d3lCBV7qTSt6BWn_GZWE",
    authDomain: "photowall-35c09.firebaseapp.com",
    databaseURL: "https://photowall-35c09-default-rtdb.firebaseio.com",
    projectId: "photowall-35c09",
    storageBucket: "photowall-35c09.firebasestorage.app",
    messagingSenderId: "216419902790",
    appId: "1:216419902790:web:a6f051dfebe14084287147",
    measurementId: "G-ELPDF1563Q"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}