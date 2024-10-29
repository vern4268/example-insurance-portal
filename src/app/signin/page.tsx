import React from 'react';

import GoogleSignInButton from '../components/GoogleSignInButton';

import Styles from './signin.module.css';

const SignIn = () => {
    return (
        <div className={Styles.container}>
            <h1>
                Z Insurance Customer Portal
            </h1>

            <div>
                Welcome
            </div>

            <GoogleSignInButton />
        </div>
    );
};

export default SignIn;
