import React from "react";
import { useParams } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

const ProfileRouterContainer = () => {
  const params = useParams<"*">();

  const id = params["*"];

  return <ProfileContainer id={id} />;
};

export default ProfileRouterContainer;
