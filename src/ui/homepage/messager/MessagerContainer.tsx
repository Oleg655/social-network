import { connect } from "react-redux";
import React from "react";
import { AppStateType } from "../../../redux/store";
import Messager from "./Messager";
import { RedirectHOC } from "../common/RedirectHOC";

class MessagerContainer extends React.Component<PropsType> {

    render(){
       return <Messager isAuth={this.props.isAuth}/>
    }
}

type MapStatePropsType = {
    isAuth: boolean;
  };
  
  type MapDispatchPropsType = {
  };
  
  type OwnPropsType = {};
  
  type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

export default RedirectHOC(connect(mapStateToProps, {})(MessagerContainer))