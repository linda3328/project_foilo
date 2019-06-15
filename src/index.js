import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configuerStore } from './module';
import firebase from 'firebase';
import * as authActions from './module/authReducer';
const store = configuerStore();
/**
 * Provider 에 store 연결해야
 * 하위에 있는 컴포넌트에 state 값을 가져오거나
 * action을 dispatch 할수 있음
 * 
 */
var firebaseConfig = {
    apiKey: "AIzaSyC1iQ0Hn3CMtuLie6t1T5P4dSGhlCIaesY",
    authDomain: "folio-cf31c.firebaseapp.com",
    databaseURL: "https://folio-cf31c.firebaseio.com",
    projectId: "folio-cf31c",
    storageBucket: "",
    messagingSenderId: "99682798042",
    appId: "1:99682798042:web:3fc871172a89605b"
};
firebase.initializeApp(firebaseConfig);


//구글 로그인이 되면 여기에 값을 관리해줌
firebase.auth().onAuthStateChanged(function (user) {

    store.dispatch(authActions.updateUser(user));

});



ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
