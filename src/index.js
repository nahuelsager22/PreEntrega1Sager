import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaa12eKI5emXJh_I7LEAhVOodckJzV05s",
    authDomain: "sabores-del-sur-222.firebaseapp.com",
    projectId: "sabores-del-sur-222",
    storageBucket: "sabores-del-sur-222.appspot.com",
    messagingSenderId: "456979960096",
    appId: "1:456979960096:web:54c6eaa6cc60b663054745",
    measurementId: "G-RVZPGSSSWT"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
