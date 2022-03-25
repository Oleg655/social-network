import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a7566c79-aa05-48a1-9b2c-3618b68bf0c3",
  },
});

export const usersAPI = {
  getUsers: (actualPage: number = 1, portionSize: number = 10) => {
    return instance.get(`users?page=${actualPage}&count=${portionSize}`);
  },
  follow: (id: number) => {
    return instance.post(`follow/${id}`);
  },
  unFollow: (id: number) => {
    return instance.delete(`follow/${id}`);
  },
  
  getUserProfile: (id: string | undefined) => {
    return instance.get(`profile/${id}`);
  },
};

type MeResponseType = {
  data: {id: number, email: string, login: string}
  resultCode: number
  messages: Array<string>
}

export const authAPI = {
  me: () => {
    return instance.get<MeResponseType>("auth/me");
  },
}
