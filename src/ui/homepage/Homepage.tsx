import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import style from "./Homepage.module.scss";
import Messager from "./messager/Messager";
import ProfileContainer from "./profile/ProfileContainer";
import UsersContainer from "./users/UsersContainer";



function Homepage() {
  const { id } = useParams<{id: string | undefined}>();
  return (
    <div className={style.main}>
      <Routes>
        <Route path={"/messager"} element={<Messager />} />
        {/* <Route path={"/profile/:userId"} element={<Profile params={some.userId}/>} /> */}
        <Route path={"/users"} element={<UsersContainer />} />
        <Route path={"/profile:id"} element={<ProfileContainer id={id} />} />
      </Routes>
    </div>
  );
}

export default Homepage;
