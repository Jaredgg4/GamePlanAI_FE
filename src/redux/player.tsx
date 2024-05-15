import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGameData = createAsyncThunk<any>('games/fetchGames', async () => {
    const response = await axios.get(`https://api-nba-v1.p.rapidapi.com/games`, {headers:{'X-RapidAPI-Key': '9cb20a1792mshcbc6b9ff38d3ba1p1afbb3jsn948186029981',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'}, params:{date: '2024-05-15'}})
    console.log(response.data);
    return response.data
})

interface Games  {
    entity: string,
    loading: string,
    error: string | undefined,
    list: any[],
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
            state.list = action.payload.response;
        });
        builder.addCase(fetchGameData.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    }
})
export default userSlice.reducer;