import { inferActionsType } from "./store";

const SET_USERS = "SET_USERS";
const SET_ACTUAL_PAGE = "SET_ACTUAL_PAGE";
const SET_COUNT_OF_USERS = "SET_COUNT_OF_USERS";
const SET_LOADER = "SET_LOADER";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

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

export type initialStateType = {
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

const usersReducer = (
  action: ActionsType,
  state = initialState
): initialStateType => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_ACTUAL_PAGE: {
      return {
        ...state,
        actualPage: action.actualPage,
      };
    }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserT) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserT) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_COUNT_OF_USERS: {
      return {
        ...state,
        countOfUseres: action.usersCount,
      };
    }
    case SET_LOADER: {
      return {
        ...state,
        loader: action.loader,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;

type ActionsType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof follow>
  | ReturnType<typeof unFollow>
  | ReturnType<typeof setActualPage>
  | ReturnType<typeof setCountOfUsers>
  | ReturnType<typeof setLoader>;

export const setUsers = (users: UserT[]) =>
  ({ type: SET_USERS, users } as const);
export const follow = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unFollow = (userId: number) =>
  ({ type: UNFOLLOW, userId } as const);
export const setActualPage = (actualPage: number) =>
  ({ type: SET_ACTUAL_PAGE, actualPage } as const);
export const setCountOfUsers = (usersCount: number) =>
  ({ type: SET_COUNT_OF_USERS, usersCount } as const);
export const setLoader = (loader: boolean) =>
  ({ type: SET_LOADER, loader } as const);
