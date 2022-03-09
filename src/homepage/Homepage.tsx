import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import style from "./Homepage.module.scss";
import Messager from "./messager/Messager";
import Profile from "./profile/Profile";
import Users from "./users/Users";

function Homepage() {

  const params =useParams<'userId'>()

  const some = params

  return (
    <div className={style.main}>
      <Routes>
        <Route path={"/messager"} element={<Messager />} />
        {/* <Route path={"/profile/:userId"} element={<Profile params={some.userId}/>} /> */}
        <Route path={"/users"} element={<Users />} />
        <Route path={"/profile/"} element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Homepage;
