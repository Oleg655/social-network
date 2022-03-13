import React from "react";
import { PostType } from "./ProfilePosts";
import style from "../../../common/Common.module.scss";

type PostPropsType = {
    post: PostType
}

const Post = (props: PostPropsType) => {
    return(
        <div>
               <img className={style.userPhoto} src={props.post.avatar} />
               <span>{props.post.message}</span>
        </div>
    )
}

export default Post;