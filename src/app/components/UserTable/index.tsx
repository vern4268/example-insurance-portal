import React from 'react';

import { TUserList } from '@/app/lib/redux/slices/types';

import Styles from './userTable.module.css';

const UserTable = ({
    userList,
}: {
    userList: TUserList[]
}) => {
    const tableHeader = [
        'User ID',
        'First Name',
        'Last Name',
        'Email',
        'Avatar',
    ];

    const renderTableHeader = tableHeader.map(header => {
        return (
            <th key={header}>
                {header}
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
                    {email}
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
