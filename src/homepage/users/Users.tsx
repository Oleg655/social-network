import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../common/userphoto.png";
import { UserT } from "../../redux/users-reducer";
import Pagination from "../pagination/Pagination";
import style from "../../common/Common.module.scss";

const Users = (props: any) => {
  return (
    <div>
      {props.loader === true ? "loading" : null}

      <Pagination
        actualPage={props.actualPage}
        countOfUseres={props.countOfUseres}
        sizeOfPage={props.portionSize}
        setActualPageHandler={props.setActualPageHandler}
      />
      <div>
        {props.users.map((i: UserT) => (
          <div key={i.id}>
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
                    props.buttonUnfollow(i.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
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
