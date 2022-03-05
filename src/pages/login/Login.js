import React from 'react';
import { useState } from 'react';
import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandleLoginForm = (e) => {
        e.preventDefault()
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
                    <button type='submit'>log in</button>
                </div>
            </form>
        </div>
    );
};

export default Login;