import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCmjuWHKHR4jQzyooBIzf7bHxwvz8ZCxX8",
    authDomain: "realproject-ba05c.firebaseapp.com",
    databaseURL: "https://realproject-ba05c.firebaseio.com",
    projectId: "realproject-ba05c",
    storageBucket: "realproject-ba05c.appspot.com",
    messagingSenderId: "434309360678"
};
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
