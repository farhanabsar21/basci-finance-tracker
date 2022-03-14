import React, { useState } from 'react';
import { useSignUp } from '../../hooks/useSignup';
import './Signup.scss'

const Signup = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp, error, isPending } = useSignUp()

    const HandleSignUpForm = (e) => {
        e.preventDefault()
        signUp(email, password, displayName)
        setDisplayName('')
        setEmail('')
        setPassword('')
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
                    {!isPending && <button type='submit'>sign up</button>}
                    {isPending && <button disabled>Loading..</button>}
                </div>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Signup;