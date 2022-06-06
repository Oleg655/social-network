import React from "react";
import { Route, Switch } from "react-router-dom";
import style from "./Homepage.module.scss";
import Login from "./login/Login";
import MessagerContainer from "./messager/MessagerContainer";
import ProfileContainer from "./profile/ProfileContainer";
import UsersContainer from "./users/UsersContainer";

function Homepage() {
  return (
    <div className={style.main}>
      <Switch>
        <Route path={"/messager"} component={MessagerContainer} />
        <Route path={"/users"} component={UsersContainer} />
        <Route path={"/profile/:id?"} component={ProfileContainer} />
        <Route path={"/login"} component={Login} />
      </Switch>
    </div>
  );
}

export default Homepage;
