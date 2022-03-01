import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../common/userphoto.png";
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

function Users(props: any) {
  const [users, setUsers] = useState<UserT[]>([]);
  const [countOfUseres, setCountOfUsers] = useState<number>(0);
  const [actualPage, setActualPage] = useState<number>(1);
  const [followed, setFollowed] = useState<boolean>(false);

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

  const sumOfPages = Math.ceil(countOfUseres / sizeOfPage);

  const pages = [];

  for (let i = 1; i <= sumOfPages; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
    //pages.push(i)
  }

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
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                setActualPageHandler(p);
              }}
              key={p}
            >
              {p}
            </span>
          );
        })}
      </div>

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
              {i.followed ? (
                <button
                  onClick={() => {
                    setFollowed(false);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    setFollowed(true);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
