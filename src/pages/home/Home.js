import React from 'react'
import './Home.scss'
import TransactionForm from './TransactionForm';

const Home = () => {
    return (
        <section className='home-container'>
            <div className="home-left">
                <h2>hello left</h2>
            </div>
            <div className="home-right">
                <h3>Add Your Transaction</h3>
                <TransactionForm/>
            </div>
        </section>
    );
};

export default Home;