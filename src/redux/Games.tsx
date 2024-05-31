import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Games from './model/games'

const date = new Date();

let today = ``

if(date.getMonth()+1 < 10){
    today = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()+1}`//break down the code because it might go to 32 when the date is 31
}
else{
    today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`
}

export const fetchGameData = createAsyncThunk<any>('games/fetchGames', async () => {
    const response = await axios.get(`https://api-nba-v1.p.rapidapi.com/games`, {headers:{'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'}, params:{date: today.toString()}})
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
    console.log(response.data);
    return response.data
})

export const fetchGameById = createAsyncThunk<any, any>('games/FetchGameId', async (gameId: number) => {
    const response = await axios.get(`https://api-nba-v1.p.rapidapi.com/games`, {headers:{'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'}, params:{id: gameId}})
    console.log(response.data);
    return response.data;
})


interface GamesState  {
    loading: string,
    error: string | undefined,
    list: any[],
    list2: any[]
}


const userSlice = createSlice({
    name: 'games',
    initialState: { entity: '', loading: 'idle', error: '', list: [], list2: []} as GamesState,
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
        builder.addCase(fetchGameById.pending, (state, action) => {
            state.loading = 'loading';
        });
        builder.addCase(fetchGameById.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.list2 = action.payload.response;
        });
        builder.addCase(fetchGameById.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    }
})
export default userSlice.reducer;