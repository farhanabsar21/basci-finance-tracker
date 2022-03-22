import React from 'react'
import Loader from '../../components/navbar/Loader/Loader';
import TransactionList from '../../components/navbar/TransactionList/TransactionList';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import './Home.scss'
import TransactionForm from './TransactionForm';

const Home = () => {
    const { user } = useAuthContext()

    const { document, error } = useCollection(
        'transactions', 
        ['uid', '==', user.uid]
        )

    return (
        <section className='home-container'>
            <div className="home-left">
                <h3>Transaction List</h3>
                {!document && <Loader/>}
                {error && <p>{error}</p>}
                {document && <TransactionList data={document}/>}
            </div>
            <div className="home-right">
                <h3>Add Your Transaction</h3>
                <TransactionForm uid={user.uid}/>
            </div>
        </section>
    );
};

export default Home;