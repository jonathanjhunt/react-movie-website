import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    <div>
        <Link to="./Home">Home</Link>
        <Link to="./About">About Us</Link>
        <Link to="../miniproject/FilmRequest">Search for films!</Link>
    </div>
}

export default Nav;