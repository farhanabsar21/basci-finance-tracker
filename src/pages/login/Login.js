import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // login functions
    const { login, error, isPending } = useLogin()

    const HandleLoginForm = (e) => {
        e.preventDefault()
        login(email, password)
        setEmail('')
        setPassword('')
    }
    
    return (
        <div className='login-form-container'>
            <form onSubmit={HandleLoginForm}>
                <div className='input-container'>
                    <label>Email:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className='input-container'>
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className='input-container'>
                    {!isPending && <button type='submit'>log in</button>}
                    {isPending && <button type='submit'>loading..</button>}
                </div>
            </form>
            {error && <p>{ error }</p>}
        </div>
    );
};

export default Login;