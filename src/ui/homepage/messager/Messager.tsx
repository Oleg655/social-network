import React from "react";
import { Redirect } from "react-router-dom";

type MessagerProps = {
  isAuth: boolean;
};

function Messager(props: MessagerProps) {
  if (props.isAuth === false) return <Redirect to="/login" />;

  return <div>Messages</div>;
}

export default Messager;
