import React, { Component } from 'react';
import * as authActions from '../../module/authReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Signin extends Component {

    // componentDidUpdate() {
    //     if (this.props.user) {
    //         //goto main

    //     }
    // }


    onGoogleLogin = e => {
        console.log('google login')
        this.props.authActions.signinWithGoogle();
    }
    onSignOut = e => {
        this.props.authActions.signOut();
    }
    render() {
        const { user, accessToken } = this.props;
        return (
            <div>
                <button onClick={this.onGoogleLogin}>Google Sign In</button>
                <button onClick={this.onSignOut}>Sign Out</button>
                <h3>{JSON.stringify(user)}</h3>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        accessToken: state.auth.accessToken
    }
}
const mapDisplayToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisplayToProps)(Signin);
