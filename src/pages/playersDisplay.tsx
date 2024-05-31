import { UseSelector, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { RootState } from '../redux/store';
import { fetchPlayers } from "@/redux/Players";
import { fetchGameById } from "@/redux/Games";
import { AppDispatch } from "../redux/store";
import Players from '../redux/model/players'
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import styles from '@/styles/playersDisplay.module.css';

const DisplayPlayers: React.FC = () => {
    const players: Players[] = useSelector((state: RootState) => state.Players.Players);
    const games = useSelector((state: RootState) => state.Games.list2)
    const dispatch = useDispatch<AppDispatch>();
    const status: string = useSelector((state: RootState) => state.Players.loading);
    const router = useRouter();
    const gamesParams = useSearchParams();

    const data = gamesParams?.get('game')

    console.log("Game id ", data);
    useEffect(() => {
        dispatch(fetchPlayers())
        dispatch(fetchGameById(data))
    }, [dispatch])

    let todaysTeams: string[] = []

    games.map(g => todaysTeams.push(g.teams.home.name))
    games.map(g => todaysTeams.push(g.teams.visitors.name))
    console.log("todaysTeams", todaysTeams);

    const filteredPlayers = players.filter(p => todaysTeams.includes(p.playerteam));

    console.log("FilteredPlayers", filteredPlayers);

    return(
        <main>
            <div>
                {
                    status === 'loading' ? (
                        <p>loading...</p>
                    ): status === 'failed' ? (
                        <p>Failed to fetch players</p>
                    ): (
                        <div>
                            <ul>
                                {filteredPlayers.map((players) => (
                                    <div className={styles.playercards}>
                                    <div key={players.playerid} className={styles.players}>
                                        <h2>{players.playername}</h2>
                                        <li>Team: {players.playerteam}</li>
                                        <li>Position: {players.playerposition}</li>
                                        <h2>Averages</h2>
                                        <li>Points: {players.avgpoints}</li>
                                        <li>Rebounds: {players.avgrebounds}</li>
                                        <li>Assists: {players.avgassist}</li>
                                    </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
        </main>
    )
}

export default DisplayPlayers;