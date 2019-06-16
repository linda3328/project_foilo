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


//API로 유저가 로그인했을때 로그인값이 달라지면 아래 함수가 업데이트해줌!
firebase.auth().onAuthStateChanged(function (user) {

    store.dispatch(authActions.updateUser(user));

});



ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
