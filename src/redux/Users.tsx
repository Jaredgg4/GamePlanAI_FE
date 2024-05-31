import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Users from './model/users';

export const createUser = createAsyncThunk<Users, {username: string, email: string, password: string} & Partial<Users>>('users/createUser', async (newUser) => {
    const { username, email, password, ...userData} = newUser
    const response = await axios.post(`http://localhost:3000/GamePlan/createUser`, newUser)
    console.log(username);
    console.log(email);
    console.log(password)
    console.log(newUser)
    console.log(response.data);
    return response.data
})

export const getUser = createAsyncThunk<Users[]>('users/getUser', async () => {
    const response = await axios.get(`http://localhost:3000/GamePlan/getUsers`);
    console.log(response.data);
    return response.data;
})

interface UserState{
    User1: Users,
    User2: Users[],
    loading: string,
    error: string | null | undefined
}


const userSlice = createSlice({
    name: 'users',
    initialState: { User1: [{ userid: 0, username: '', email: '', password: '', profilepic: '' }], User2: [], loading: 'idle', error: undefined } as unknown as UserState,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(createUser.pending, (state, action) => {
            state.loading = 'loading';
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.User1 = action.payload;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = 'loading';
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.User2 = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    }
})

export default userSlice.reducer;