import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';
import styles from '../styles/gamesDisplay.module.css';
import Link from 'next/link';
import { createUser, getUser } from '@/redux/Users';
import Users from '../redux/model/users'

const CreateUser: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username2, setUsername2] = useState('');
    const [email2, setEmail2] = useState('');
    const [id, setId] = useState(0);
    const [password2, setPassword2] = useState('');
    const users = useSelector((state: RootState) => state.Users.User1)
    const user = useSelector((state: RootState) => state.Users.User2)
    const dispatch = useDispatch<AppDispatch>();
    let signedIn = false;

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])

    const createAccount = () => {
        if (username && email && password !== ''){
            console.log('Creating Account...');
            console.log(username)
            console.log(email)
            console.log(password)
            signedIn = true

            dispatch(createUser({ username: `${username}`, email: `${email}`, password: `${password}`}))
        }
    }
    let currentId: any;

    useEffect(() => {
        user.map((m) => {if(m.username == username2 && m.email == email2 && m.password == password2){currentId = m.userid}})
        setId(currentId);
        console.log(currentId)
    })
    

    console.log("currentId ", id)


    return(
        <div>
            <h1>Sign In</h1>
            <hr></hr>
            Username
            <input type='text' placeholder='username' value={username2} onChange={(e) => setUsername2(e.target.value)}/>
            <br></br>
            email
            <input type='text' placeholder='email' value={email2} onChange={(e) => setEmail2(e.target.value)}/>
            <br></br>
            password
            <input type='password' placeholder='email' value={password2} onChange={(e) => setPassword2(e.target.value)}/>
            <br></br>
            <br></br>
            <Link href={'/?userid=' + String(id)}><button>Sign In</button></Link>
            <hr></hr>
            <h1>Create Account</h1>
            <hr></hr>
            username
            <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br></br>
            email
            <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            password
            <input type='password' placeholder='email' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <br></br>
            <Link href="/"><button onClick={createAccount}>Create Account</button></Link>
        </div>
    )
}
export default CreateUser