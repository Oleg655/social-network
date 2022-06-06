import { connect } from "react-redux";
import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../../redux/store";

export function RedirectHOC<T>(Component: ComponentType<T>) {
  class RedirectComponent extends React.Component<MapStatePropsType> {
    render() {
      let { isAuth, ...restProps } = this.props;
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...restProps as T} />;
    }
  }
  type MapStatePropsType = {
    isAuth: boolean;
  };
  const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  const ConnectedRedirectComponent =
    connect(mapStateToProps)(RedirectComponent);
  return ConnectedRedirectComponent;
}
