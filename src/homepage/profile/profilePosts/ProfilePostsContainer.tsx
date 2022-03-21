import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import {addPostAC, updatePostMessageAC } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/store";
import ProfilePosts from "./ProfilePosts";

const mapStateToProps = (state: AppStateType) => {
  return {
    message: state.profile.message,
    post: state.profile.post,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updatePostMessage: (text: string) => {
      dispatch(updatePostMessageAC(text));
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

const ProfilePostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePosts);

export default ProfilePostsContainer;
