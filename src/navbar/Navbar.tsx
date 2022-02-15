import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss'

function Navbar(){
    return (
        <div className={style.navbar}>
            <Link to="/profile">My profile </Link>
            <Link to="/messager">My messages </Link>
            <Link to="/music">My music </Link>
            <Link to="/news">News </Link>

            <Link to="">Settings</Link>
        </div>
    )
}

export default Navbar;