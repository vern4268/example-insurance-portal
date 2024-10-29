import React from 'react';
import { redirect } from 'next/navigation';

import { auth } from '../auth';
import SignOutButton from '../components/SignOutButton';

import Styles from './signout.module.css';

const SignOut = () => {
    const session = auth();

    if (!session) {
        redirect('/');
    }

    return (
        <div className={Styles.container}>
            Confirm Sign Out?

            <SignOutButton />
        </div>
    );
};

export default SignOut;
