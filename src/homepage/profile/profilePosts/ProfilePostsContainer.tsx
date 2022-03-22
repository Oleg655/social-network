import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import {addPost, updatePostMessage } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/store";
import ProfilePosts from "./ProfilePosts";

type MapStatePropsType = {
  
}

const mapStateToProps = (state: AppStateType) => {
  return {
    message: state.profile.message,
    post: state.profile.post,
  };
};



const ProfilePostsContainer = connect(
  mapStateToProps,
  {updatePostMessage,addPost}
)(ProfilePosts);

export default ProfilePostsContainer;
