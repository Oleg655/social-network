import React from "react";
import {  NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

type NavbarPropsType = {
  isAuth: boolean
  login: string | null
}

function Navbar(props: NavbarPropsType) {

  console.log(props.isAuth)
  return (
    <div className={style.navbar}>
      <NavLink className={style.navbarLinks} to="/profile">My profile </NavLink>
      <NavLink className={style.navbarLinks} to="/messager">My messages </NavLink>
      <NavLink className={style.navbarLinks} to="/users">Users </NavLink>
      <NavLink className={style.navbarLinks} to="/music">My music </NavLink>
      <NavLink className={style.navbarLinks} to="/news">News </NavLink>
      <NavLink className={style.navbarLinks} to="/settings">Settings </NavLink>
      {props.isAuth ? props.login : <NavLink className={style.navbarLinks} to="/login">Login</NavLink>}

      
    </div>
  );
}

export default Navbar;
