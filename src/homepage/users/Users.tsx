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

  const sizeOfPage = 10;
  const pageNumberLimit = 10;

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

  const pages: Array<number> = [];

  for (let i = 1; i <= sumOfPages; i++) {
    pages.push(i);
  }

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

  const renderPageNumbers = pages.map((p) => {
    if (p < maxPageNumberLimit + 1 && p > minPageNumberLimit) {
      return (
        <button
          onClick={() => {
            setActualPageHandler(p);
          }}
          key={p}
        >
          {p}
        </button>
      );
    }
  });

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

 

  const handleNextBtn = () => {
    setActualPageHandler(actualPage + 1);

    if (actualPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setActualPageHandler(actualPage - 1);

    if ((actualPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <button  onClick={handleNextBtn}> &hellip; </button>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <button  onClick={handlePrevBtn}> &hellip; </button>;
  }

  return (
    <div>
      <div>
        <button
          onClick={handlePrevBtn}
          disabled={actualPage === pages[0] ? true : false}
        >
          Prev
        </button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <button
          onClick={handleNextBtn}
          disabled={actualPage === pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
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
              {i.followed ? <button>Unfollow</button> : <button>Follow</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
