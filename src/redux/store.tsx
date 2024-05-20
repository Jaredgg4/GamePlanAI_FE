import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './Games'

export const store = configureStore({
    reducer: {
        Games: gamesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

