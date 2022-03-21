const SET_USERS = "SET_USERS";
const SET_ACTUAL_PAGE = "SET_ACTUAL_PAGE";
const SET_COUNT_OF_USERS = "SET_COUNT_OF_USERS";
const SET_LOADER = "SET_LOADER";

export type UserT = {
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
  name: string;
  status: string;
  uniqueUrlName?: string | null;
};

type initialStateType = {
  users: UserT[];
  countOfUseres: number;
  actualPage: number;
  portionSize: number;
  loader: boolean;
};

const initialState: initialStateType = {
  users: [],
  countOfUseres: 0,
  actualPage: 1,
  portionSize: 10,
  loader: false,
};

const usersReducer = (action: any, state = initialState) => {
  switch (action.type) {
    case SET_USERS: {
      return [...state.users, action.users];
    }
    case SET_ACTUAL_PAGE: {
      return {
        ...(state.actualPage = action.actualPage),
      };
    }
    case SET_COUNT_OF_USERS: {
      return {
        ...(state.countOfUseres = action.usersCount),
      };
    }
    case SET_LOADER: {
      return {
        ...(state.loader = action.loader),
      };
    }
    default:
      return state;
  }
};

export default usersReducer;

export const setUsersAC = (users: UserT[]) => {
  return { type: SET_USERS, users };
};

export const setActualPageAC = (actualPage: number) => {
  return { type: SET_ACTUAL_PAGE, actualPage };
};

export const setCountOfUsersAC = (usersCount: number) => {
  return { type: SET_COUNT_OF_USERS, usersCount };
};

export const setLoaderAC = (loader: boolean) => {
  return { type: SET_LOADER, loader };
};
