import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "39e46080-d84b-4e2a-ad64-d73170161ffd",
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

  getProfile: (id: string | undefined) => {
    return instance.get(`profile/${id}`);
  },
};

type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: number;
  messages: Array<string>;
};

export const authAPI = {
  me: () => {
    return instance.get<MeResponseType>("auth/me");
  },
};
