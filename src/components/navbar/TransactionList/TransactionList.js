import React from 'react';
import './TransactionList.scss'

const TransactionList = ({data}) => {
    return (
        <ul className='transaction-container'>
            {data.map(transaction => 
                <li key={transaction.id}>
                    <p className='userName'>{transaction.userName}</p>
                    <p className='amount'>${transaction.amount}</p>
                </li>
            )}
        </ul>
    );
};

export default TransactionList;