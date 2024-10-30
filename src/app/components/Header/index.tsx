import Link from 'next/link';
import React from 'react';

import Styles from './header.module.css';

const Header = () => {
    return (
        <div className={Styles.container}>
            <Link
                href='/'
                className={Styles['home-button']}
            >
                <img
                    src='/next.svg'
                    alt='NextJS logo'
                    width={100}
                    height={30}
                />
            </Link>

            <Link
                href='/signout'
                className={Styles['sign-out-button']}
            >
                Sign Out
            </Link>
        </div>
    );
};

export default Header;
