import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //redirect hooks
    let history = useHistory();
    let location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user; //result object destructuring

                //create object
                const signInUser = {
                    name: displayName,
                    email
                }
                setLoggedInUser(signInUser);

                //use history hooks
                history.replace(from);

            }).catch((error) => {
                console.error('handleGoogleSignIn', error);
            });
    }
    return (
        <div>
            <h1>Please log In</h1>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;