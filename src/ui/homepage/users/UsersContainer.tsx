import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/store";

import {
  requestFollow,
  requestUnFollow,
  requestUsers,
  setActualPage,
  UserT,
} from "../../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.page, this.props.portionSize);
  }

  buttonFollow = (id: number) => {
    this.props.requestFollow(id);
  };

  buttonUnfollow = (id: number) => {
    this.props.requestUnFollow(id);
  };

  setActualPageHandler = (page: number) => {
    this.props.setActualPage(page);
    this.props.requestUsers(page, this.props.portionSize);

    // this.props.setLoader(true);
    // usersAPI.getUsers(page, this.props.portionSize).then((response) => {
    //   this.props.setLoader(false);
    //   this.props.setUsers(response.data.items);
    // });
  };

  render() {
    return (
      <Users
        setActualPageHandler={this.setActualPageHandler}
        buttonFollow={this.buttonFollow}
        buttonUnfollow={this.buttonUnfollow}
        users={this.props.users}
        countOfUseres={this.props.countOfUseres}
        page={this.props.page}
        portionSize={this.props.portionSize}
        isButtonDisabled={this.props.isButtonDisabled}
        loader={this.props.loader}
      />
    );
  }
}

type MapStatePropsType = {
  users: UserT[];
  countOfUseres: number;
  page: number;
  portionSize: number;
  loader: boolean;
  isButtonDisabled: Array<number>;
};

type MapDispatchPropsType = {
  setActualPage: (page: number) => void;
  requestUsers: (page: number, portionSize: number) => void;
  requestFollow: (userId: number) => void;
  requestUnFollow: (userId: number) => void;
};

type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    countOfUseres: state.usersPage.countOfUseres,
    page: state.usersPage.page,
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
  setActualPage,
  requestFollow,
  requestUnFollow,
  requestUsers,
})(UsersContainer);
