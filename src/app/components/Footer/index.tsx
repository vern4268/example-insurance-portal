import React from 'react';

import Styles from './footer.module.css';

const Footer = ({
    user,
}: {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } | undefined;
}) => {
    const renderUser = () => {
        if (!user) return null;

        const {
            name,
            email,
            image,
        } = user;

        return (
            <div className={Styles['user-card-container']}>
                {image
                && (
                    <img
                        src={image}
                        alt={`${name} photo`}
                        width={40}
                        height={40}
                        referrerPolicy='no-referrer'
                    />
                )
                }

                <div className={Styles['user-card-name-and-email-container']}>
                    <div>
                        {name}
                    </div>

                    <div>
                        {email}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={Styles.container}>
            {renderUser()}

            <div>
                T Insurance Customer Portal
            </div>
        </div>
    );
};

export default Footer;
