import React, { ChangeEvent } from "react";
import { PostType } from "../../../../redux/profile-reducer";
import Post from "./post/Post";


type MyPostsPropsType = {
  newMessage: string;
  posts: PostType[];
  updatePostMessage: (text: string) => void;
  addPost: () => void;
};

const MyPosts = (props: MyPostsPropsType) => {

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value;
    props.updatePostMessage(text);
  };

  return (
    <>
      <div>
        <textarea value={props.newMessage} onChange={onPostChange}></textarea>
        <button onClick={props.addPost}>Add post</button>
      </div>

      <div>
        {props.posts.map((el) => {
          return <Post post={el} />;
        })}
      </div>
    </>
  );
};

export default MyPosts;
