import React, { useState } from 'react';
import './Signup.scss'

const Signup = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandleSignUpForm = (e) => {
        e.preventDefault()
    }
    
    return (
        <div className='signup-form-container'>
            <form onSubmit={HandleSignUpForm}>
                <div className='input-container'>
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName}/>
                </div>
                <div className='input-container'>
                    <label>Email:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className='input-container'>
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className='input-container'>
                    <button type='submit'>sign up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;