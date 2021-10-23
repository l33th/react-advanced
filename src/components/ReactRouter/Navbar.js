import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='item'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <ul>
        <li style={{padding:'10px'}}>
          <Link to='/'>Home</Link>
        </li>
        <li style={{padding:'10px'}}>
          <Link to='/about'>About</Link>
        </li>
        <li style={{padding:'10px'}}>
          <Link to='/people'>People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
