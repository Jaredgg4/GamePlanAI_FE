import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './Games'
import playerReducer from './Players'
import parlayReducer from './Parlays'
import userReducer from './Users'

export const store = configureStore({
    reducer: {
        Games: gamesReducer,
        Players: playerReducer,
        Parlays: parlayReducer,
        Users: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

