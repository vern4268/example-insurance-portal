'use client';
import React from 'react';

import { FilterUserNames } from '../utils/helpers';
import { useAppSelector } from '../lib/redux/hooks';

import UserTable from '../components/UserTable';

import Styles from './users.module.css';

const Users = () => {
    const userList = useAppSelector(state => state.user.userList);

    const userFirstNameStartsWithFilter = 'G';
    const userLastNameStartsWithFilter = 'W';

    const filteredUsers = FilterUserNames({
        names: userList,
        firstNameStartWith: userFirstNameStartsWithFilter,
        lastNameStartsWith: userLastNameStartsWithFilter,
    });

    return (
        <div className={Styles.container}>
            <div>
                Users whose first name starts with {userFirstNameStartsWithFilter} or last name starts with {userLastNameStartsWithFilter}

                <UserTable userList={filteredUsers} />
            </div>
        </div>
    );
};

export default Users;
