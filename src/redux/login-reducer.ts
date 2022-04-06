import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";
import { AppStateType } from "./store";

type initialStateType = typeof initialState;

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

const loginReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "AUTHORIZATION": {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;

type ActionsType = ReturnType<typeof authorization>;

export const authorization = (id: number, email: string, login: string) => {
  return { type: "AUTHORIZATION", data: { id, email, login } };
};

export const requestAuthMe = (): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsType
> => {
  return async (dispatch, getState) => {
    const response = await authAPI.me();
    const { id, email, login } = response.data.data;
    if (response.data.resultCode === 0) {
      dispatch(authorization(id, email, login));
    }
  };
};
