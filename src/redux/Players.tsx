import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Players from './model/players'



export const fetchPlayers = createAsyncThunk<Players[]>('players/fetchPlayers', async () => {
    const response = await axios.get(`http://localhost:3000/GamePlan/getAllPlayers`);
    console.log(response.data);
    return response.data;
})

// export const todaysGame = createAsyncThunk<any>('')


interface PlayerState {
    Players: Players[],
    loading: string,
    error: string | undefined | null,
}

const initialState: PlayerState = {
    Players: [],
    loading: 'idle',
    error: null
}

const playerSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPlayers.pending, (state, action) => {
            state.loading = 'loading';
        });
        builder.addCase(fetchPlayers.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.Players = action.payload;
        });
        builder.addCase(fetchPlayers.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    }
})
export default playerSlice.reducer;