import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGameData = createAsyncThunk<any>('games/fetchGames', async () => {
    const response = await axios.get(`https://api-nba-v1.p.rapidapi.com/games`)
    console.log(response.data);
    return response.data
})

interface Games  {
    entity: string,
    loading: string,
    error: string | undefined,
    list: string[],
}


const userSlice = createSlice({
    name: 'games',
    initialState: { entity: '', loading: 'idle', error: '', list: []} as Games,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchGameData.pending, (state, action) => {
            state.loading = 'loading';
        });
        builder.addCase(fetchGameData.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.entity = action.payload;
        });
        builder.addCase(fetchGameData.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    }
})
export default userSlice.reducer;