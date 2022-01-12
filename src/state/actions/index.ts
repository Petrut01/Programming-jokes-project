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


export type LoginAction = LoginUserAction;

export type CommentAction = AddComment | DeleteComment | DeleteAllComments;