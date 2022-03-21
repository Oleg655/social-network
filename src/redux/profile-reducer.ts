import ProfileAvatar from "../common/post-avatar.png";
import { PostType } from "../homepage/profile/profilePosts/ProfilePosts";

export const ADD_POST = "ADD_POST";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";

type initialStateType = {
  post: PostType[];
  message: string;
};

const initialState: initialStateType = {
  post: [
    {
      message: '',
      avatar: '',
    },
  ],
  message: '',
};

const profileReducer = (action: any, state = initialState) => {
  switch (action.type) {
    case ADD_POST: {
      return [
        ...state.post,
        {
          message: state.message,
          avatar: ProfileAvatar,
        },
      ];
    }
    case UPDATE_MESSAGE: {
      return (state.message = action.text);
    }
    default:
      return state;
  }
};

export default profileReducer;

export const updatePostMessageAC = (text: string) => {
  return {type: UPDATE_MESSAGE, text }
}

export const addPostAC = () => {
  return {type: ADD_POST}
}