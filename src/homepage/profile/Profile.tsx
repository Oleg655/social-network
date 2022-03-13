import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfilePosts from "./profilePosts/ProfilePosts";

type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    auth: boolean
};

function Profile(props: any) {
  const [auth, setAuth] = useState<AuthType>({ id: null, email: null, login: null, auth: false });


  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`
      )
      .then((response) => {
        const {id, email, login} = response.data.data

        setAuth({...auth, id, email, login, auth: true})
      });
  }, []);

  // const [data, setData] = useState({})

  // useEffect(() => {
  //     axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + props.params)
  //         .then(response => {
  //             setData(response.data)
  //         })
  // })

  return (
    <div>
      <ProfilePosts />
    </div>
  );
}

export default Profile;
