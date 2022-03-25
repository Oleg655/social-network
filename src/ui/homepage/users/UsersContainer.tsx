import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../../api/api";
import { AppStateType } from "../../../redux/store";
import {
  buttonDisabled,
  follow,
  requestUsers,
  setActualPage,
  setCountOfUsers,
  setLoader,
  setUsers,
  unFollow,
  UserT,
} from "../../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.setLoader(true);
    usersAPI
      .getUsers(this.props.actualPage, this.props.portionSize)
      .then((response) => {
        this.props.setLoader(false);
        this.props.setUsers(response.data.items);
        this.props.setCountOfUsers(response.data.totalCount);
      });
  }

  buttonFollow = (id: number) => {
    usersAPI.follow(id).then((response) => {
      if (response.data.resultCode === 0) {
        this.props.follow(id);
      }
    });
  };

  buttonUnfollow = (id: number) => {
    usersAPI.unFollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        this.props.unFollow(id);
      }
    });
  };

  setActualPageHandler = (page: number) => {
    this.props.setActualPage(page);
    this.props.setLoader(true);
    usersAPI.getUsers(page, this.props.portionSize).then((response) => {
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
        isButtonDisabled={this.props.isButtonDisabled}
        buttonDisabled={this.props.buttonDisabled}
      />
    );
  }
}

type MapStatePropsType = {
  users: UserT[];
  countOfUseres: number;
  actualPage: number;
  portionSize: number;
  loader: boolean;
  isButtonDisabled: boolean;
};

type MapDispatchPropsType = {
  setUsers: (uesrs: UserT[]) => void;
  setActualPage: (page: number) => void;
  setCountOfUsers: (usersCount: number) => void;
  setLoader: (loader: boolean) => void;
  follow: (uesrId: number) => void;
  unFollow: (userId: number) => void;
  buttonDisabled: (disabled: boolean, userId: number) => void;
  requestUsers: (page: number, portionSize: number) => (dispatch: any, getState: any) => void
};

type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    countOfUseres: state.usersPage.countOfUseres,
    actualPage: state.usersPage.actualPage,
    portionSize: state.usersPage.portionSize,
    loader: state.usersPage.loader,
    isButtonDisabled: state.usersPage.isButtonDisabled,
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, {
  setUsers,
  setActualPage,
  setCountOfUsers,
  setLoader,
  follow,
  unFollow,
  buttonDisabled,
  requestUsers
})(UsersContainer);
