import { connect } from "react-redux";
import React from "react";
import { requestAuthMe } from "../../redux/login-reducer";
import { AppStateType } from "../../redux/store";
import Header from "./Header";

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestAuthMe()
  }

  render() {
    return <Header {...this.props} />;
  }
}

type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

type MapDispatchPropsType = {
  requestAuthMe: () => void;
};

type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { requestAuthMe })(HeaderContainer);
