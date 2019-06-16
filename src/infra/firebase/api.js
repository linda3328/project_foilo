import firebase from 'firebase';


export function signinAPI(email, password) {
    // firebase.auth().signInWithEmail()
}

export function signinWithGoogleAPI() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}

export function signinWithFacebookAPI() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}
export function signOutAPI() {
    return firebase.auth().signOut()
}
