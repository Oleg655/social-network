import React, { ChangeEvent, useState } from "react";
import PorofileAvatar from "../../../common/post-avatar.png";
import Post from "./Post";

const ProfilePosts = () => {
  const [message, setMessage] = useState<string>("");
  const [post, setPost] = useState<{}>({});

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.currentTarget.value;
    setMessage(newMessage);
  };

  const addPost = (message: any) => {
    setPost({
      message,
      avatar: PorofileAvatar,
    });
  };

  return (
    <>
      <div>
        <textarea onChange={onChangeMessage}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>

      <div>
        <Post post={post}/>
      </div>
    </>
  );
};

export default ProfilePosts;