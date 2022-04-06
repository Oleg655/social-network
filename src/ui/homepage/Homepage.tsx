import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import style from "./Homepage.module.scss";
import Login from "./login/Login";
import MessagerContainer from "./messager/MessagerContainer";
import ProfileRouterContainer from "./profile/ProfileRouterContainer";
import UsersContainer from "./users/UsersContainer";

function Homepage() {
  
  return (
    <div className={style.main}>
      <Routes>
        <Route path={"/messager"} element={<MessagerContainer />} />
        <Route path={"/users"} element={<UsersContainer />} />
        <Route path={"/profile/*"} element={<ProfileRouterContainer />}/>
        <Route path={"/login"} element={<Login />} />
          
      </Routes>
    </div>
  );
}

export default Homepage;
