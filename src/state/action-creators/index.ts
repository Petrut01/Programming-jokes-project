import {ActionType} from "../action-types/index";
import { Dispatch } from "redux";
import {CommentAction, LoginAction} from "../actions/index";

export const addComment = (comment: string) => {
    return (dispatch: Dispatch<CommentAction>) => {
        dispatch({
            type: ActionType.ADDCOMMENT,
            payload: comment
        })
    }
}

export const deleteComment = (comment: string) => {
    return (dispatch: Dispatch<CommentAction>) => {
        dispatch({
            type: ActionType.DELETECOMMENT,
            payload: comment
        })
    }
}

export const deleteAllComments = () => {
    return (dispatch: Dispatch<CommentAction>) => {
        dispatch({
            type: ActionType.DELETEALLCOMMENTS
        })
    }
}

export const loginUser = (userName: string) => {
    return (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: ActionType.LOGIN,
            payload: userName
        });
    }
}


