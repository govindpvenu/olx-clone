import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB7HRSqFGmh_lZbmC3f35Rc8rzCuMwZyso",
    authDomain: "olx-clonee-45823.firebaseapp.com",
    projectId: "olx-clonee-45823",
    storageBucket: "olx-clonee-45823.appspot.com",
    messagingSenderId: "304128718558",
    appId: "1:304128718558:web:a5acc26968d3b94a89344f",
    measurementId: "G-FHCQ76NYTD"
};


export default firebase.initializeApp(firebaseConfig);


