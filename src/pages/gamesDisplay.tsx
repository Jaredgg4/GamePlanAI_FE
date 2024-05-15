import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { RootState } from '../redux/store';
import { fetchGameData } from '@/redux/player';
import { AppDispatch } from '../redux/store';

const DisplayGames: React.FC = () =>{
    const Games = useSelector((state: RootState) => state.Games.list);
    const dispatch = useDispatch<AppDispatch>();
    const status: string = useSelector((state: RootState) => state.Games.loading);

    return(
        <div>
            {status === 'loading' ? (
                        <p>Loading...</p>
                    ): status === 'failed' ? (
                        <p>Failed to fetch games</p>
                    ): (
                        <ul>
                    {Games.map((User: any, index: number) => (
                        <li key={index}>{User}</li> 
                    ))}
                    </ul>
                        
                    )}
                    <button onClick={() => dispatch(fetchGameData())}>Create new user</button>
        </div>
    )
}

export default DisplayGames;