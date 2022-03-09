import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../common/userphoto.png";
import Pagination from "../pagination/Pagination";
import style from "./Users.module.scss";

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

  const sizeOfPage = 10;

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${actualPage}&count=${sizeOfPage}`
      )
      .then((response) => {
        setUsers(response.data.items);
        setCountOfUsers(response.data.totalCount);
      });
  }, []);

  const setActualPageHandler = (p: number) => {
    setActualPage(p);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${sizeOfPage}`
      )
      .then((response) => {
        setUsers(response.data.items);
      });
  };

  return (
    <div>
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
              {i.followed ? <button>Unfollow</button> : <button>Follow</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
