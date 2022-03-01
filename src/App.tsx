import React from 'react';
import logo from './logo.svg';
import style from './App.module.scss'
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Homepage from './homepage/Homepage';
import Users from './homepage/users/Users';

function App() {
  return (
    <div>
      
        <Header/>
      <div className={style.container}>
        <Navbar/>
        <Homepage/>
      </div>      
    

    </div>
  );
}

export default App;
