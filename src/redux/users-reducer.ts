import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { AppStateType } from "./store";

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

export type initialStateType = typeof initialState;

const initialState = {
  users: [] as UserT[] | [],
  countOfUseres: 0,
  page: 1,
  portionSize: 10,
  loader: false,
  isButtonDisabled: [] as Array<number>,
};

const usersReducer = (state = initialState, action: ActionsType,): initialStateType => {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case "SET_ACTUAL_PAGE": {
      return {
        ...state,
        page: action.page,
      };
    }
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u: UserT) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u: UserT) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_COUNT_OF_USERS": {
      return {
        ...state,
        countOfUseres: action.usersCount,
      };
    }
    case "SET_LOADER": {
      return {
        ...state,
        loader: action.loader,
      };
    }
    case "BUTTON-DISABLED":
      return {
        ...state,
        isButtonDisabled: action.disabled
          ? [...state.isButtonDisabled, action.userId]
          : state.isButtonDisabled.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;

type ActionsType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unFollowSuccess>
  | ReturnType<typeof setActualPage>
  | ReturnType<typeof setCountOfUsers>
  | ReturnType<typeof setLoader>
  | ReturnType<typeof buttonDisabled>;

export const setUsers = (users: UserT[]) =>
  ({ type: "SET_USERS", users } as const);
export const followSuccess = (userId: number) =>
  ({ type: "FOLLOW", userId } as const);
export const unFollowSuccess = (userId: number) =>
  ({ type: "UNFOLLOW", userId } as const);
export const setActualPage = (actualPage: number) =>
  ({ type: "SET_ACTUAL_PAGE", page: actualPage } as const);
export const setCountOfUsers = (usersCount: number) =>
  ({ type: "SET_COUNT_OF_USERS", usersCount } as const);
export const setLoader = (loader: boolean) =>
  ({ type: "SET_LOADER", loader } as const);
export const buttonDisabled = (disabled: boolean, userId: number) =>
  ({ type: "BUTTON-DISABLED", disabled, userId } as const);

export const requestUsers = (
  page: number,
  portionSize: number
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
  return async (dispatch, getState) => {
    dispatch(setLoader(true));
    const response = await usersAPI.getUsers(page, portionSize);

    dispatch(setLoader(false));
    dispatch(setUsers(response.data.items));
    dispatch(setCountOfUsers(response.data.totalCount));
  };
};

export const requestFollow = (userId: number) => {
  return async (dispatch: any, getState: any) => {
    dispatch(buttonDisabled(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      followSuccess(userId);
    }
    buttonDisabled(false, userId);
  };
};

export const requestUnFollow = (userId: number) => {
  return async (dispatch: Dispatch<ActionsType>, getState: any) => {
    dispatch(buttonDisabled(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      unFollowSuccess(userId);
    }
    buttonDisabled(false, userId);
  };
};
