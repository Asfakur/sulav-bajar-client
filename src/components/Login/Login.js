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

    const signOut = () => {
        setLoggedInUser([]);
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
            {
                loggedInUser.email ?
                <div className="container text-center">
                    <h1>Logout</h1>
                    <button className="btn btn-danger btn-lg" onClick={signOut}>Log Out</button>
                </div>
                :
                <div className="container text-center">
                    <h1>Please log In To continue</h1>
                    <button className="btn btn-dark btn-lg" onClick={handleGoogleSignIn}>Continue with Google</button>
                </div>

            }

        </div>

    );
};

export default Login;