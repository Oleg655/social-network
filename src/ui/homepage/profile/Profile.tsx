import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props: any) {
  
  return (
    <>
      <div>
        <img src={props.profile?.photos.large} />
      </div>

      <div>
        <MyPostsContainer />
      </div>
    </>
  );
}

export default Profile;
