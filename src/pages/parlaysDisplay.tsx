import { UseSelector, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { RootState } from '../redux/store';
import { AppDispatch } from "../redux/store";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { fetchParlays } from "@/redux/Parlays";
import Parlays from '../redux/model/parlays';
import Link from "next/link";

const DisplayParlays: React.FC = () => {
    const Parlays: Parlays[] = useSelector((state: RootState) => state.Parlays.parlays);
    const user = useSelector((state: RootState) => state.Users.User2)
    const dispatch = useDispatch<AppDispatch>();
    const status: string = useSelector((state: RootState) => state.Players.loading);
    const idParams = useSearchParams();

    const id: any = idParams?.get('userid')

    useEffect(() => {
        dispatch(fetchParlays());
    }, [dispatch])

    let parlayids: any[] = [];

    Parlays.map(p => {if(p.userid == parseInt(id)){parlayids.push(p.userid)}})

    console.log("parlayids ", parlayids);


    const filteredParlays = Parlays.filter(p => parlayids.includes(p.userid));

    console.log("filteredparlays", filteredParlays);



    return (
        <main>
            {
                status == 'loading' ? (
                    <p>loading...</p>
                ): status == 'failed' ? (
                    <p>failed to fetch parlays</p>
                ): (
                    <div>
                        <ul>
                            {filteredParlays.map((parlays) => (
                                <div key={parlays.parlayid}>
                                    <h3>Parlay id: {parlays.parlayid}</h3>
                                    <p>Amount: {parlays.amount}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                )

            }
            <div>
                <Link href={'/createParlay?userid=' + id}><button>Create Parlay</button></Link>
                <Link href={'/?userid=' + id}><button>Home</button></Link>
            </div>
        </main>
    )
}

export default DisplayParlays;