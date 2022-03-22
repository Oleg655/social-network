import axios from "axios";
import React from "react";
import { UserT } from "../../redux/users-reducer";
import Users from "./Users";

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

class UsersAPIComponent extends React.Component<UsersPropsType> {
  componentDidMount() {
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
      <Users
        buttonFollow={this.buttonFollow}
        buttonUnfollow={this.buttonUnfollow}
        users={this.props.users}
        countOfUseres={this.props.countOfUseres}
        actualPage={this.props.actualPage}
        portionSize={this.props.portionSize}
      />
    );
  }
}
export default UsersAPIComponent;
