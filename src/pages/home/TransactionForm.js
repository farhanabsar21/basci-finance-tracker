import React from 'react';
import { useState } from 'react';
import './Home.scss';

const TransactionForm = () => {
    const [userName, setUserName] = useState('')
    const [amount, setAmount] = useState('')

    const handleTransactionSubmit = e => {
        e.preventDefault()

    }
    return (
        <form onSubmit={handleTransactionSubmit}>
            <label>
                <span>Name:</span>
                <input 
                    type="text"
                    onChange={e => setUserName(e.target.value)}
                    value={userName}
                    required
                 />
            </label>
            <label>
            <span>Amount ($):</span>
                <input 
                    type="number"
                    onChange={e => setAmount(e.target.value)}
                    value={amount}
                    required
                 />
            </label>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;