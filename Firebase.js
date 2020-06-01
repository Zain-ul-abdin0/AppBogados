import firebase from 'firebase';


 var firebaseConfig = {
    apiKey: "AIzaSyDI0JWhrXa5AxjT1H8jbi2rYopurK0jQkQ",
    authDomain: "appbogados-3004a.firebaseapp.com",
    databaseURL: "https://appbogados-3004a.firebaseio.com",
    projectId: "appbogados-3004a",
    storageBucket: "appbogados-3004a.appspot.com",
    messagingSenderId: "941077779411",
    appId: "1:941077779411:web:eb6b8c61e987b5dc07d526",
    measurementId: "G-FD9N2QEFS1"
  };

  
  const Firebase = firebase.initializeApp(firebaseConfig);
  export default Firebase;