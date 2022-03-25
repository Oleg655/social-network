import { combineReducers, createStore } from "redux";
import loginReducer from "./login-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: loginReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
