'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

import Styles from './signOutButton.module.css';

const SignOutButton = () => {
    return (
        <button
            className={Styles.container}
            onClick={() => signOut({ callbackUrl: '' })}
        >
            Sign out
        </button>
    );
};

export default SignOutButton;
