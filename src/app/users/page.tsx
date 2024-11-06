import React from 'react';

import CustomUserTable from './CustomUserTable';

import Styles from './users.module.css';

const Users = () => {
    return (
        <div className={Styles.container}>
            <CustomUserTable />
        </div>
    );
};

export default Users;
