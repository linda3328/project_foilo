import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configuerStore } from './module';

const store = configuerStore();
/**
 * Provider 에 store 연결해야
 * 하위에 있는 컴포넌트에 state 값을 가져오거나
 * action을 dispatch 할수 있음
 * 
 */

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
