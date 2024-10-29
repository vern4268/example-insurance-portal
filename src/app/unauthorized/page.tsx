import Link from 'next/link';
import React from 'react';

import Styles from './unauthorized.module.css';

const Unauthorized = () => {
    return (
        <div className={Styles.container}>
            You are unauthorized to access this page

            <Link
                href='/signin'
                className={Styles['navigate-to-signin-button']}
            >
                Navigate to the Sign In page
            </Link>
        </div>
    );
};

export default Unauthorized;
