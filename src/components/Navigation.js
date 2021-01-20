import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => (
    <nav>
        <ul>
          <li><NavLink exact activeClassName='current' to='/'>Home</NavLink></li>
          <li><NavLink exact activeClassName='current' to='/search'>Search</NavLink></li>
          <li><NavLink exact activeClassName='current' to='/library'>Library</NavLink></li>
          <li><NavLink exact activeClassName='current' to='/customers'>Customer List</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;