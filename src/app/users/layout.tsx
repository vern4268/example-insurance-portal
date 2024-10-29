import React from 'react';
import { redirect } from 'next/navigation';

import { auth } from '../auth';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Styles from './layout.module.css';
import StoreProvider from '../lib/redux/StoreProvider';

const UsersLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const session = await auth();

    if (!session) return redirect('/unauthorized');

    return (
        <div className={Styles.layout}>
            <Header />

            <StoreProvider>
                {children}
            </StoreProvider>

            <Footer user={session.user}/>
        </div>
    );
};

export default UsersLayout;
