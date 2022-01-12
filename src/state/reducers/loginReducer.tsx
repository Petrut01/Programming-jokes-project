import {LoginAction} from "../actions";
import {ActionType} from "../action-types";


const loginReducer = (state: string= '', action: LoginAction) => {
    switch(action.type){
        case ActionType.LOGIN:
            return action.payload;
        default:
            return state;
    }
}

export default loginReducer;