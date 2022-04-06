import { connect } from "react-redux";
import React from "react";
import Profile from "./Profile";
import { AppStateType } from "../../../redux/store";
import { ProfileType, requestUserProfile } from "../../../redux/profile-reducer";

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUserProfile(this.props.id)
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

type OwnPropsType = { id?: string | undefined };

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, { requestUserProfile })(ProfileContainer);
