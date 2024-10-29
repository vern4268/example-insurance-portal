'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

import Styles from './googleSignInButton.module.css';

const GoogleSignInButton = () => {
    return (
        <button
            className={Styles.container}
            onClick={() => signIn('google', { callbackUrl: '/' })}
        >
            Sign in with Google
        </button>
    );
};

export default GoogleSignInButton;
