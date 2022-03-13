import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import style from './Header.module.scss'

export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
};

function Header () {

  const [auth, setAuth] = useState<AuthType>({ id: null, email: null, login: null, isAuth: false });

  useEffect(() => {
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}
      )
      .then((response) => {
        const {id, email, login} = response.data.data

        setAuth({...auth, id, email, login, isAuth: true})
      });
  }, []);

    return (
      <div className={style.header}>
           <Navbar auth={auth}/>
      </div>
    )
  }

  export default Header;