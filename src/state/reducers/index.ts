import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    comment: commentReducer,
    login: loginReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;