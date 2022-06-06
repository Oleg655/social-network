import { connect } from "react-redux";
import React from "react";
import Profile from "./Profile";
import { AppStateType } from "../../../redux/store";
import {
  ProfileType,
  requestProfile,
} from "../../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {RedirectHOC} from '../common/RedirectHOC'

type PathParamsType = {
  id: string;
};

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  
  componentDidMount() {
    let userId = this.props.match.params.id
    if(!userId) {
      userId = '14664'
    }
    this.props.requestUserProfile(userId);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

type MapStatePropsType = {
  profile: ProfileType | null;
};

type MapDispatchPropsType = {
  requestUserProfile: (id: string | undefined) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
  };
};
const withRouterComponent = withRouter(ProfileContainer);
export default RedirectHOC(connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, { requestUserProfile: requestProfile })(withRouterComponent));
