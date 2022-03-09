import React from 'react';
import Navbar from '../navbar/Navbar';
import style from './Header.module.scss'

function Header () {
    return (
      <div className={style.header}>
           <Navbar/>
      </div>
    )
  }

  export default Header;