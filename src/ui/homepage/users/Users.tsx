import React from "react";
import {  NavLink } from "react-router-dom";
import userPhoto from "../../../common/userphoto.png";
import { UserT } from "../../../redux/users-reducer";
import Pagination from "../pagination/Pagination";
import style from "../../../common/Common.module.scss";

type Users = {
  setActualPageHandler: (page: number) => void;
  buttonFollow: (id: number) => void;
  buttonUnfollow: (id: number) => void;
  users: UserT[];
  countOfUseres: number;
  page: number;
  portionSize: number;
  isButtonDisabled: number[];
  loader: boolean;
};

const Users = (props: Users) => {
  return (
    <div>
      {props.loader === true ? "loading" : null}

      <Pagination
        page={props.page}
        countOfUseres={props.countOfUseres}
        sizeOfPage={props.portionSize}
        setActualPageHandler={props.setActualPageHandler}
      />
      <div>
        {props.users.map((i: UserT) => (
          <div key={i.id}>
            <NavLink to={"/profile/" + i.id}>
              <img
                className={style.userPhoto}
                src={i.photos.small != null ? i.photos.small : userPhoto}
              />
            </NavLink>
            <span>{i.name}</span>
            <div>
              {i.followed ? (
                <button
                  disabled={props.isButtonDisabled.some(
                    (id: number) => id === i.id
                  )}
                  onClick={() => {
                    props.buttonUnfollow(i.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.isButtonDisabled.some(
                    (id: number) => id === i.id
                  )}
                  onClick={() => {
                    props.buttonFollow(i.id);
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
};

export default Users;
