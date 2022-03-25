import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

type NavbarPropsType = {
  isAuth: boolean
  login: string
}

function Navbar(props: NavbarPropsType) {
  return (
    <div className={style.navbar}>
      <Link className={style.navbarLinks} to="/profile">My profile </Link>
      <Link className={style.navbarLinks} to="/messager">My messages </Link>
      <Link className={style.navbarLinks} to="/users">Users </Link>
      <Link className={style.navbarLinks} to="/music">My music </Link>
      <Link className={style.navbarLinks} to="/news">News </Link>
      <Link className={style.navbarLinks} to="">Settings </Link>
      {props.isAuth ? props.login : <Link className={style.navbarLinks} to="/login">Login</Link>}
      
    </div>
  );
}

export default Navbar;
