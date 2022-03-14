import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
import './Navbar.scss'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className='navigation'>
            <div className='logo'>
                <Link to="/"><h1>finance tracker</h1></Link>
            </div>
            <div className="auth">
                {!user && <Link to="/login">Login</Link>}
                {!user && <Link to="/signup" className='sign-up'>Sign up</Link>}
                {user && <p>Hi, {user.displayName}</p>}
                {user && <button onClick={logout}>Logout</button>}
            </div>
        </nav>
    );
};

export default Navbar;