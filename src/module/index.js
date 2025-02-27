import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import penderMiddleware, { penderReducer } from 'redux-pender';
import authReducer from './authReducer';


export function configuerStore() {

    const middleware = applyMiddleware(penderMiddleware())
    const composed = window.__REDUX_DEVTOOLS_EXTENSION__ ?
        compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ) :
        middleware;

    //createStore에 첫번째 인자는 리듀서, 두번째 인자는 미들웨어
    return createStore(
        combineReducers({
            pender: penderReducer,
            auth: authReducer,
        }),
        composed
    )
}