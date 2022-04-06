import { connect } from "react-redux";
import React from "react";
import { AppStateType } from "../../../redux/store";
import Messager from "./Messager";

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

export default connect(mapStateToProps, {})(MessagerContainer)