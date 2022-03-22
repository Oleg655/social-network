import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { addPost, updatePostMessage } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/store";
import ProfilePosts, { PostType } from "./ProfilePosts";

type MapStatePropsType = {
  message: string
  posts: PostType[]
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    message: state.profile.message,
    posts: state.profile.post,
  };
};

const ProfilePostsContainer = connect(mapStateToProps, {
  updatePostMessage,
  addPost,
})(ProfilePosts);

export default ProfilePostsContainer;
