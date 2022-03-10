import React, { ChangeEvent, useState } from "react";
import ProfileAvatar from "../../../common/post-avatar.png";
import Post from "./Post";

export type PostType = {
  message: string;
  avatar: string;
};

const ProfilePosts = () => {
  const [message, setMessage] = useState<string>('');
  const [post, setPost] = useState<PostType[]>([]);

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.currentTarget.value;
    setMessage(newMessage);
  };

  const addPost = () => {
    setPost([...post, {
      message,
      avatar: ProfileAvatar,
    }]);
    setMessage('')
  };

  return (
    <>
      <div>
        <textarea value={message} onChange={onChangeMessage}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>

      <div>
        {post.map((el) => {
            return <Post post={el} />
        })}
        
      </div>
    </>
  );
};

export default ProfilePosts;
