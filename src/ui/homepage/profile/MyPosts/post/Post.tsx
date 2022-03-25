import React from "react";
import style from "../../../../common/Common.module.scss";
import { PostType } from "../../../../redux/profile-reducer";

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