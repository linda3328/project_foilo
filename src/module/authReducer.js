import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import * as types from './actionTypes';
import { signinAPI, signinWithGoogleAPI, signOutAPI, signinWithFacebookAPI } from '../infra/firebase/api';
// import firebase from 'firebase';

//api는 프로마이즈
// export const signin = createAction(type.SIGN_IN, signinAPI);

export const signinWithGoogle = createAction(types.SIGN_IN_WITH_GOOGLE, signinWithGoogleAPI);
export const signinWithFacebook = createAction(types.SIGN_IN_WITH_FACEBOOK, signinWithFacebookAPI);

export const signOut = createAction(types.SIGN_OUT, signOutAPI);
export const updateUser = createAction(types.UPDATE_USER);

// //아래 방식을 사용할려면 리덕스썬크를 사용해야됨
// export const constonAuthStateChanged = () => {
//     firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//             // User is signed in.
//         } else {
//             // No user is signed in.
//         }
//     });
// }




export default handleActions({
    // ...pender({
    //     type: type.SIGN_IN,
    //     onSuccess: (state, action) => {
    //         return Object.assign({}, state, {
    //             //변경된 데이터 내용
    //         })
    //     },
    //     onFailure: (state, action) => {
    //         return Object.assign({}, state, {
    //             //변경된 데이터 내용

    //         });
    //     }
    // }), 
    ...pender({
        type: types.SIGN_IN_WITH_GOOGLE,
        onSuccess: (state, action) => {
            // const result = action.payload;
            // const accessToken = result.credential.accessToken;
            // const user = result.user;
            return Object.assign({}, state, {
                user: action.payload,
                accessToken: action.payload.credential.accessToken
            })
        },
        onFailure: (state, action) => {
            return Object.assign({}, state, {
                error: action.payload

            });
        }
    }), ...pender({
        type: types.SIGN_OUT,
        onFailure: (state, action) => {
            return Object.assign({}, state, {
                error: action.payload

            });
        }
    }),
    [types.UPDATE_USER]: (state, action) => {
        return Object.assign({}, state, {
            user: action.payload,
        });
    }
}, {

        user: null,
        accessToken: null,
        error: null,
    })