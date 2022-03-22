import { combineReducers, createStore } from "redux";
import loginReducer from "./login-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    usersPage: usersReducer,
})

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type inferActionsType<T extends {[key: string]: (...args: any[])=> any}> = ReturnType<PropertiesType<T>>

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
