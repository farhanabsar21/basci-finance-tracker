import React, { useEffect } from 'react';
import { useState } from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import './Home.scss';

const TransactionForm = ({uid}) => {
    const [userName, setUserName] = useState('')
    const [amount, setAmount] = useState('')

    // useFirestore hook 
    const { addDocument, response } = useFirebase('transactions')

    const handleTransactionSubmit = e => {
        e.preventDefault()
        addDocument({
            uid, userName, amount
        })
    }
    // reset form
    useEffect(() => {
        if(response.success){
            setUserName('')
            setAmount('')
        }
    }, [response.success])
    
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