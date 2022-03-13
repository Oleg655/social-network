import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../common/userphoto.png";
import Pagination from "../pagination/Pagination";
import style from "../../common/Common.module.scss";

export type UserT = {
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
  name: string;
  status: string;
  uniqueUrlName?: string | null;
};

function Users() {
  const [users, setUsers] = useState<UserT[]>([]);
  const [countOfUseres, setCountOfUsers] = useState<number>(0);
  const [actualPage, setActualPage] = useState<number>(1);

  const [loader, setLoader] = useState<boolean>(false);
  


  const sizeOfPage = 10;

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${actualPage}&count=${sizeOfPage}`
      )
      .then((response) => {
        setLoader(false);
        setUsers(response.data.items);
        setCountOfUsers(response.data.totalCount);
      });
  }, []);

  const setActualPageHandler = (p: number) => {
    setActualPage(p);
    setLoader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${sizeOfPage}`
      )
      .then((response) => {
        setLoader(false);
        setUsers(response.data.items);
      });
  };

  return (
    <div>
      {loader === true ? "loading" : null}

      <Pagination
        actualPage={actualPage}
        countOfUseres={countOfUseres}
        sizeOfPage={sizeOfPage}
        setActualPageHandler={setActualPageHandler}
      />
      <div>
        {users.map((i) => (
          <div>
            <Link to={"/profile/" + i.id}>
              <img
                className={style.userPhoto}
                src={i.photos.small != null ? i.photos.small : userPhoto}
              />
            </Link>
            <span>{i.name}</span>
            <div>
              {i.followed ? <button>Unfollow</button> : <button onClick={}>Follow</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
