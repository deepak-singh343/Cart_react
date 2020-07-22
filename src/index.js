import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6EUCPixf7DutG6x8X4Ii7Q_9A0MbKPmc",
  authDomain: "deepak-sample-271004.firebaseapp.com",
  databaseURL: "https://deepak-sample-271004.firebaseio.com",
  projectId: "deepak-sample-271004",
  storageBucket: "deepak-sample-271004.appspot.com",
  messagingSenderId: "950267911436",
  appId: "1:950267911436:web:94c21866415144e3b1bd29",
  measurementId: "G-HLCCLM7CF0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


