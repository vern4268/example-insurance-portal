import React from 'react';
import Link from 'next/link';

import Styles from './not-found.module.css';

const NotFound = () => {
    return (
        <div className={Styles.container}>
            <h2>Not Found</h2>

            <p>Could not find requested resource</p>

            <Link
                className={Styles['return-home-button']}
                href='/'
            >
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;
