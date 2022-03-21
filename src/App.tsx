import React from "react";
import logo from "./logo.svg";
import style from "./App.module.scss";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Homepage from "./homepage/Homepage";
import Users from "./homepage/users/UsersAPI";

function App() {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}

export default App;
