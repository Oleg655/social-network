import { connect } from "react-redux";
import React from "react";
import { authorization } from "../../redux/login-reducer";
import { AppStateType } from "../../redux/store";
import Header from "./Header";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    authAPI.me()
      .then((response) => {
        const { id, email, login } = response.data.data;

        this.props.authorization(id, email, login);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

type MapStatePropsType = {
  isAuth: boolean;
  login: string|null;
};

type MapDispatchPropsType = {
  authorization: (id: number, email: string, login: string) => void;
};

type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { authorization })(HeaderContainer);
