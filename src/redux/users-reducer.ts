const SET_USERS = "SET_USERS";
const SET_ACTUAL_PAGE = "SET_ACTUAL_PAGE";
const SET_COUNT_OF_USERS = "SET_COUNT_OF_USERS";
const SET_LOADER = "SET_LOADER";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'

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
  follow: boolean
};

const initialState: initialStateType = {
  users: [],
  countOfUseres: 0,
  actualPage: 1,
  portionSize: 10,
  loader: false,
  follow: false
};

const usersReducer = (action: any, state = initialState):initialStateType => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, action.users]
      }
    }
    case SET_ACTUAL_PAGE: {
      return {
        ...(state.actualPage = action.actualPage),
      };
    }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserT) => {
            if(u.id === action.userId){
              return{...u, followed: true}
            }
            return u
        })
      }
      case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserT) => {
            if(u.id === action.userId){
              return{...u, followed: false}
            }
            return u
        })
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

export const setUsers = (users: UserT[]) => {
  return { type: SET_USERS, users };
};

export const follow = (userId: number) => {
  return { type: FOLLOW, userId };
};

export const unFollow = (userId: number) => {
  return { type: UNFOLLOW, userId };
};

export const setActualPage = (actualPage: number) => {
  return { type: SET_ACTUAL_PAGE, actualPage };
};

export const setCountOfUsers = (usersCount: number) => {
  return { type: SET_COUNT_OF_USERS, usersCount };
};

export const setLoader = (loader: boolean) => {
  return { type: SET_LOADER, loader };
};
