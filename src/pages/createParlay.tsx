import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';
import styles from '../styles/gamesDisplay.module.css';
import Link from 'next/link';
import Users from '../redux/model/users'
import { useSearchParams } from "next/navigation";
import { createParlay } from '@/redux/Parlays';

const newParlay: React.FC = () => {
    const [userid, setUserid] = useState(0);
    const [amount, setAmount] = useState('');

    const newParlay = useSelector((state: RootState) => state.Parlays.parlay)
    const user = useSelector((state: RootState) => state.Users.User2)
    const dispatch = useDispatch<AppDispatch>();

    const idParams = useSearchParams();
    const id: any = idParams?.get('userid');


    const create = () => {
        if(amount !== '0'){
            console.log('Creating Parlay...');
            dispatch(createParlay({userId: parseInt(id), amount: parseInt(amount)}))
        }
    }

    return (
        <div>
            <h1>Create Parlay</h1>
            <hr></hr>
            amount
            <input type='number' placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <br></br>
            <Link href={'/parlaysDisplay?userid=' + id}><button onClick={create}>Create</button></Link>
            <br></br>
            <Link href={'/parlaysDisplay?userid=' + id}><button>Back</button></Link>
        </div>
        

    )
}

export default newParlay;