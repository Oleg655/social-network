import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './Homepage.module.scss'
import Messager from './messager/Messager';
import Profile from './profile/Profile';

function Homepage(){
    return(
        <div className={style.main}>
            <Routes>
                <Route path={'/messager'} element={<Messager/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/*'} element={<div>404</div>}/>
            </Routes>
        </div>
    )
}

export default Homepage;