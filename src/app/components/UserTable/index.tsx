import React, { useState } from 'react';

import { TUserList } from '@/app/lib/redux/slices/types';

import Styles from './userTable.module.css';

const UserTable = ({
    userList,
}: {
    userList: TUserList[];
}) => {
    const [shouldMaskEmailAddress, setShouldMaskEmailAddress] = useState(true);

    const tableHeader = [
        'User ID',
        'First Name',
        'Last Name',
        'Email',
        'Avatar',
    ];

    const toggleEmailMasking = () => setShouldMaskEmailAddress(!shouldMaskEmailAddress);

    const renderToggleEmailMaskingButton = (header: string) => {
        if (header === 'Email') {
            return (
                <button
                    onClick={toggleEmailMasking}
                    className={Styles['mask-email-button']}
                >
                    <img
                        src={shouldMaskEmailAddress ? '/eye-off.svg' : '/eye-on.svg'}
                        alt={shouldMaskEmailAddress ? 'eye shut' : 'eye open'}
                        width={20}
                        height={20}
                    />
                </button>
            );
        }
    };

    const renderTableHeader = tableHeader.map(header => {
        return (
            <th key={header}>
                {header}

                {renderToggleEmailMaskingButton(header)}
            </th>
        );
    });

    const renderTableBody = userList.map(user => {
        const {
            id,
            first_name,
            last_name,
            email,
            avatar,
        } = user;

        return (
            <tr key={id}>
                <td>
                    {id}
                </td>

                <td>
                    {first_name}
                </td>

                <td>
                    {last_name}
                </td>

                <td>
                    {shouldMaskEmailAddress ? Array(email.length + 1).join('*') : email}
                </td>

                <td>
                    <img
                        src={avatar}
                        alt={`${last_name} photo`}
                        width={25}
                        height={25}
                    />
                </td>
            </tr>
        );
    });

    return (
        <table className={Styles.container}>
            <thead>
                <tr>
                    {renderTableHeader}
                </tr>
            </thead>

            <tbody>
                {renderTableBody}
            </tbody>
        </table>
    );
};

export default UserTable;
