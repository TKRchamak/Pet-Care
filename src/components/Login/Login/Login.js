import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig.js'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App.js';
import Navbar from '../../Shared/Navbar/Navbar.js';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();

            fetch('http://localhost:5000/addCustomer', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ name: displayName, email })
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        // alert('Customer is Login')
                    }
                    console.log(data)
                })
                .catch(error => {
                    console.error(error)
                })
        }).catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(idToken => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(error => {
                console.log(error)
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="login-page container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="from-group mt-5 text-center">
                        <button className="btn btn-style " onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;