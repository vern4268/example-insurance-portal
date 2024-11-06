'use client';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks';

import UserTable from '../../components/UserTable';
import { fetchUserList } from '@/app/lib/redux/slices/userSlice';

const CustomUserTable = () => {
    const userList = useAppSelector(state => state.user.userList);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserList());
    }, []);

    return (
        <>
            Users whose first name starts with G or last name starts with W

            <UserTable userList={userList} />
        </>
    );
};

export default CustomUserTable;
