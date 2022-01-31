import {ActionType} from "../action-types/index";

interface AddComment {
    type: ActionType.ADDCOMMENT,
    payload: string
}

interface DeleteComment {
    type: ActionType.DELETECOMMENT,
    payload: string
}

interface DeleteAllComments {
    type: ActionType.DELETEALLCOMMENTS
}

interface LoginUserAction {
    type: ActionType.LOGIN,
    payload: string
}
interface LogoutUserAction {
    type: ActionType.LOGOUT
}


export type LoginAction = LoginUserAction | LogoutUserAction;

export type CommentAction = AddComment | DeleteComment | DeleteAllComments;