import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Parlays from './model/parlays'

export const fetchParlays = createAsyncThunk<Parlays[]>('parlays/fetchParlay', async () => {
    const response = await axios.get(`http://localhost:3000/GamePlan/getAllParlays`);
    console.log(response.data);
    return response.data;
})

export const createParlay = createAsyncThunk<Parlays, {userId: number, amount: number} & Partial<Parlays>>('parlays/createParlay', async (parlayData) => {
    const { userId, amount, ...newParlay} = parlayData
    const response = await axios.post(`http://localhost:3000/GamePlan/createParlays`, parlayData);
    console.log(response.data);
    return response.data;
})

interface ParlayState{
    parlays: Parlays[],
    parlay: Parlays,
    loading: string,
    error: string | undefined | null
}


const parlaySlice = createSlice({
    name: 'parlays',
    initialState: { parlays: [], parlay: [{ parlayid: 0, userid: 0, amount: 0 }], loading: 'idle', error: undefined } as unknown as ParlayState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchParlays.pending, (state, action) => {
            state.loading = 'loading';
        });
        builder.addCase(fetchParlays.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.parlays = action.payload;
        });
        builder.addCase(fetchParlays.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(createParlay.pending, (state, action) => {
            state.loading = 'loading';
        });
        builder.addCase(createParlay.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.parlay = action.payload;
        });
        builder.addCase(createParlay.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    }
})

export default parlaySlice.reducer;