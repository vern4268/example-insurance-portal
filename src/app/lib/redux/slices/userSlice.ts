import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TUserSliceInitialState } from './types';
import { getUserList } from './getUserList';

const initialState: TUserSliceInitialState = {
    userList: [],
};

export const fetchUserList = createAsyncThunk(
    'user/getUserList',
    async () => {
        const response = await getUserList();
        return response;
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
    },
});

export default {
    actions: userSlice.actions,
    reducers: userSlice.reducer,
};
