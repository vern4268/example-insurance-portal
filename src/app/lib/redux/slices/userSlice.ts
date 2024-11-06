import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TUserSliceInitialState } from './types';
import { getUserDetails } from '@/app/actions/getUserDetails';

const initialState: TUserSliceInitialState = {
    userList: [],
};

export const fetchUserList = createAsyncThunk(
    'user/getUserList',
    async () => {
        const response = await fetch('/api/users');
        return await response.json();
    },
);

export const fetchUserDetails = createAsyncThunk(
    'user/getUserDetails',
    async (userId: number) => {
        return await getUserDetails(userId);
    },
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserList.fulfilled, (state, action) => {
            state.userList = action.payload;
        });
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
            const updatedUserList = state.userList.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }

                return user;
            });

            state.userList = updatedUserList;
        });
    },
});

export default {
    actions: userSlice.actions,
    reducers: userSlice.reducer,
};
