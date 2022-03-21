import { connect } from "react-redux";
import Users from "./UsersAPI";
import { AppStateType } from "../../redux/store";
import { setActualPageAC, setCountOfUsersAC, setLoaderAC, setUsersAC, UserT } from "../../redux/users-reducer";

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.users.users,
    countOfUseres: state.users.countOfUseres,
    actualPage: state.users.actualPage,
    portionSize: state.users.portionSize,
    loader: state.users.loader,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUsers: (users: UserT[]) => {
      dispatch(setUsersAC(users));
    },
    setActualPage: (page: number) => {
      dispatch(setActualPageAC(page));
    },
    setCountOfUsers: (usersCount: number) => {
      dispatch(setCountOfUsersAC(usersCount));
    },
    setLoader: (loader: boolean) => {
      dispatch(setLoaderAC(loader));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
