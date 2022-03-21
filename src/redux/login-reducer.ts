const AUTHORIZATION = "AUTHORIZATION";

const initialState = {
  id: null,
  email: null,
  login: null,
  auth: false,
};

const loginReducer = (action: any, state = initialState) => {
  switch (action.type) {
    case AUTHORIZATION: {
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.logion,
        auth: true,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
