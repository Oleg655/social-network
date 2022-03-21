import React, { ChangeEvent } from "react";
import Post from "./post/Post";

export type PostType = {
  message: string;
  avatar: string;
};

type ProfilePostsPropsType = {
  message: string;
  post: PostType[];
  updatePostMessage: (text: string) => void;
  addPost: () => void;
};

const ProfilePosts = (props: ProfilePostsPropsType) => {
  const onPostChange = () => (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value;
    props.updatePostMessage(text);
  };

  return (
    <>
      <div>
        <textarea value={props.message} onChange={onPostChange}></textarea>
        <button onClick={props.addPost}>Add post</button>
      </div>

      <div>
        {props.post.map((el) => {
          return <Post post={el} />;
        })}
      </div>
    </>
  );
};

export default ProfilePosts;
