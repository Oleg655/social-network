import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfilePosts from "./profilePosts/ProfilePosts";

function Profile(props:any){

// const [data, setData] = useState({})

// useEffect(() => {
//     axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + props.params)
//         .then(response => {
//             setData(response.data)
//         })
// })

    return(
        <div>
            <ProfilePosts/>
            
        </div>
    )
}

export default Profile;