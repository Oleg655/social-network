import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../common/userphoto.png";
import Pagination from "../pagination/Pagination";
import style from "../../common/Common.module.scss";
import { UserT } from "../../redux/users-reducer";

type UsersPropsType = {
  users: UserT[];
  countOfUseres: number;
  actualPage: number;
  portionSize: number;
  loader: boolean;
  setUsers: (users: UserT[]) => void;
  setActualPage: (page: number) => void;
  setCountOfUsers: (usersCount: number) => void;
  setLoader: (loader: boolean) => void;
};

class Users extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
    this.props.setLoader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.actualPage}&count=${this.props.portionSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.setLoader(false);
        this.props.setUsers(response.data.items);
        this.props.setCountOfUsers(response.data.totalCount);
      });
  }

  buttonFollow = (id: number) => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0//follow/${id}`,
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "a7566c79-aa05-48a1-9b2c-3618b68bf0c3",
          },
        }
      )
      .then(() => {});
  };

  buttonUnfollow = (id: number) => {
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0//follow/${id}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "a7566c79-aa05-48a1-9b2c-3618b68bf0c3",
        },
      })
      .then(() => {});
  };

  setActualPageHandler = (p: number) => {
    this.props.setActualPage(p);
    this.props.setLoader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.portionSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.setLoader(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <div>
        {this.props.loader === true ? "loading" : null}

        <Pagination
          actualPage={this.props.actualPage}
          countOfUseres={this.props.countOfUseres}
          sizeOfPage={this.props.portionSize}
          setActualPageHandler={this.setActualPageHandler}
        />
        <div>
          {this.props.users.map((i: UserT) => (
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
                      this.buttonUnfollow(i.id);
                      this.props.setLoader(true);
                      axios
                        .get(
                          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.actualPage}&count=${this.props.portionSize}`,
                          {
                            withCredentials: true,
                          }
                        )
                        .then((response) => {
                          this.props.setLoader(false);
                          this.props.setUsers(response.data.items);
                          this.props.setCountOfUsers(response.data.totalCount);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.buttonFollow(i.id);
                      this.props.setLoader(true);
                      axios
                        .get(
                          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.actualPage}&count=${this.props.portionSize}`,
                          {
                            withCredentials: true,
                          }
                        )
                        .then((response) => {
                          this.props.setLoader(false);
                          this.props.setUsers(response.data.items);
                          this.props.setCountOfUsers(response.data.totalCount);
                        });
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
}

export default Users;
