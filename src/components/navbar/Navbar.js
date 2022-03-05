import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navigation'>
            <div className='logo'>
                <h1>finance tracker</h1>
            </div>
            <div className="auth">
                <Link to="/login">Login</Link>
                <Link to="/signup" className='sign-up'>Sign up</Link>
            </div>
        </nav>
    );
};

export default Navbar;