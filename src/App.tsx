import React from "react";
import logo from "./logo.svg";
import style from "./App.module.scss";
import Homepage from "./ui/homepage/Homepage";
import HederContainer from "./ui/header/HederContainer";

function App() {
  return (
    <>
      <HederContainer/>
      <Homepage />
    </>
  );
}

export default App;
