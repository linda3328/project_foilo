import firebase from 'firebase';


export function signinAPI(email, password) {
    // firebase.auth().signInWithEmail()
}

export function signinWithGoogleAPI() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}

export function signOutApi() {
    return firebase.auth().signOut()
}
