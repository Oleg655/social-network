import { connect } from "react-redux";
import React from "react";
import Profile from "./Profile";
import { AppStateType } from "../../../redux/store";
import { ProfileType, setUserProfile } from "../../../redux/profile-reducer";
import { usersAPI } from "../../../api/api";


class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
   usersAPI.getUserProfile(this.props.id)
      .then((response: any) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

type MapStatePropsType = {
  profile: ProfileType;
};

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
};

type OwnPropsType = {id: string | undefined};

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
>(mapStateToProps, { setUserProfile })(ProfileContainer);
