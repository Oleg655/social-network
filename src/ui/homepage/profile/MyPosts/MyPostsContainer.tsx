import React from "react";
import { connect } from "react-redux";
import { addPost, PostType, updatePostMessage } from "../../../../redux/profile-reducer";
import { AppStateType } from "../../../../redux/store";
import ProfilePosts from "./MyPosts";

type MapStatePropsType = {
  newMessage: string
  posts: PostType[]
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newMessage: state.profilePage.newMessage,
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  updatePostMessage,
  addPost,
})(ProfilePosts);

export default MyPostsContainer;
