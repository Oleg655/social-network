import ProfileAvatar from "../common/post-avatar.png";

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
type PhotosType = {
  small: string | null;
  large: string | null;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type PostType = {
  message: string;
  avatar: string;
};

type initialStateType = typeof initialState

const initialState = {
  posts: [] as PostType[] | [],
  newMessage: "",
  profile: null as ProfileType | null,
};


const profileReducer = (action: ActionsType, state = initialState): initialStateType => {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...state,
        posts: [
          ...state.posts,
          { message: state.newMessage, avatar: ProfileAvatar },
        ],
      };
    }
    case "UPDATE_MESSAGE": {
      return {
        ...state,
        newMessage: action.text,
      };
    }
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export default profileReducer;

type ActionsType =
  | ReturnType<typeof updatePostMessage>
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>;

export const updatePostMessage = (text: string) => {
  return { type: "UPDATE_MESSAGE", text } as const;
};

export const addPost = () => {
  return { type: "ADD_POST" } as const;
};

export const setUserProfile = (profile: ProfileType) => {
  return { type: "SET-USER-PROFILE", profile } as const;
};
