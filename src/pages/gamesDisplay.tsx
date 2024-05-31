import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { RootState } from '../redux/store';
import { fetchGameData } from '@/redux/Games';
import { AppDispatch } from '../redux/store';
import styles from '../styles/gamesDisplay.module.css';
import Link from 'next/link';
import Games from '../redux/model/games'
const DisplayGames: React.FC = () =>{
    const games = useSelector((state: RootState) => state.Games.list);
    const dispatch = useDispatch<AppDispatch>();
    const status: string = useSelector((state: RootState) => state.Games.loading);
    console.log(games);

    useEffect(() => {
        dispatch(fetchGameData())
    }, [dispatch])

    return(
        <main>
        <div className={styles.body}>
            {status === 'loading' ? (
                        <p>Loading...</p>
                    ): status === 'failed' ? (
                        <p>Failed to fetch games</p>
                    ): games.length > 0 ?(
                    <div >
                    <ul>
                    {games.map((game) => (
                        <div className={styles.gameCards}  key={game.id}>
                        
                            <div className={styles.cards}>
                            <li>Home: {game.teams.home.name} VS. </li> 
                            <li>Visitors: {game.teams.visitors.name}</li>
                            <li>Score: {game.scores.home.points}(home) - {game.scores.visitors.points}(away)</li>
                            <li>Current Period: {game.periods.current}</li>
                            <li>Status: {game.status.long}</li>
                            <hr></hr>
                            <Link href={'/playersDisplay?game=' + game.id}><button>Go To This Game</button></Link>
                            </div>
                        </div>
                    ))}
                    </ul>
                    </div>
                    ):(
                        <h2>There are no scheduled games today</h2>
                    )}
                    {/* <button onClick={() => dispatch(fetchGameData())}>Load Todays Games</button> */}
                    
        </div>
        </main>
    )
}

export default DisplayGames;