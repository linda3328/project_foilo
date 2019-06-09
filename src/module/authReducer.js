import { handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as type from './actionTypes';
import { signinAPI } from '../infra/firebase/api';


//api는 프로마이즈
export const signin = createAction(type.SIGN_IN, api);
function api() {

}

export default handleActions({
    ...pender({
        type: type.SIGN_IN,
        onSuccess: (state, action) => {
            return Object.assign({}, state, {
                //변경된 데이터 내용
            })
        },
        onFailure: (state, action) => {
            return Object.assign({}, state, {
                //변경된 데이터 내용

            });
        }
    }),
    [types.DEFAULT_ACTION]: (state, action) => {
        return Object.assign({}, state, {
            //변경된 데이터 내용

        });
    }
}, {

        user: null
    })