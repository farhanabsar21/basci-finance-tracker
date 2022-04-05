import React from 'react';
import { useFirebase } from '../../../hooks/useFirebase';
import './TransactionList.scss'
import closeBtn from '../../../assets/close.svg'

const TransactionList = ({data}) => {
    const { deleteDocument } = useFirebase('transactions')

    return (
        <ul className='transaction-container'>
            {data.map(transaction => 
                <li key={transaction.id}>
                    <p className='userName'>{transaction.userName}</p>
                    <p className='amount'>${transaction.amount}</p>
                    <button onClick={()=> deleteDocument(transaction.id)}><img src={closeBtn} alt=""/></button>
                </li>
            )}
        </ul>
    );
};

export default TransactionList;