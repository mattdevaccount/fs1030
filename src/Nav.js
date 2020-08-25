import React from 'react';
import './styles/App.scss';
import './styles/navStyle.scss';
import { Link, NavLink } from 'react-router-dom'

function Nav() {

    const navStyle ={
        color: '#78cce2',
        textDecoration: 'white'
    };

  return (
    <nav>
        <Link style={navStyle} to='/'>
            <img className='logo' src = {require('./images/logo.png')} alt = 'logo' />
        </Link>
        <ul className='nav-links'>
            <NavLink exact activeClassName='onPage' style={navStyle} to='/contact'>
                <li>Contact</li>
            </NavLink>
            <NavLink exact activeClassName='onPage' style={navStyle} to='/about'> 
                <li>About</li>
            </NavLink>
            <NavLink exact activeClassName='onPage' style={navStyle} to='/portfolio'> 
                <li>Portfolio</li>
            </NavLink>
        </ul>
            <NavLink exact activeClassName='onPage' style={navStyle} to='/login'> 
                <li>Admin</li>
            </NavLink>
            {/* leaving admin to be separate in styling and hover state, not part of the "navigation" */}
    </nav>
  );
}

export default Nav;
