type initialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const loginReducer = (action: ActionsType, state = initialState) => {
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
