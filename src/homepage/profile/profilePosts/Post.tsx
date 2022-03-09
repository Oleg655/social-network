import React from "react";
import PorofileAvatar from '../../../common/post-avatar.png'

const Post = (props: any) => {
    return(
        <div>
            <img src={props.post.avatar}/>
            <span>{props.post.message}</span>

        </div>
    )
}

export default Post;