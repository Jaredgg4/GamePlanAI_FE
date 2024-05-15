import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { RootState } from '../redux/store';
import { fetchGameData } from '@/redux/player';
import { AppDispatch } from '../redux/store';
import styles from '../styles/gamesDisplay.module.css';

const DisplayGames: React.FC = () =>{
    const games = useSelector((state: RootState) => state.Games.list);
    const dispatch = useDispatch<AppDispatch>();
    const status: string = useSelector((state: RootState) => state.Games.loading);
    console.log(games);

    return(
        <div>
            {status === 'loading' ? (
                        <p>Loading...</p>
                    ): status === 'failed' ? (
                        <p>Failed to fetch games</p>
                    ): (
                        
                    <ul>
                    {games.map((game) => (
                        <div className={styles.gameCards}>
                        <li key={game.id}>Home: {game.teams.home.name}</li> 
                        <li key={game.id}>Visitors: {game.teams.visitors.name}</li>
                        <li key={game.id}>Score: {game.scores.home.points}(home) - {game.scores.visitors.points}(away)</li>
                        <li key={game.id}>Current Period: {game.periods.current}</li>
                        <li key={game.id}>Status: {game.status.long}</li>
                        </div>
                    ))}
                    </ul>
                        
                    )}
                    <button onClick={() => dispatch(fetchGameData())}>Load Todays Games</button>
        </div>
    )
}

export default DisplayGames;