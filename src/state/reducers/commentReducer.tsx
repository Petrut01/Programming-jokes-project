import {CommentAction} from '../actions/index';
import {ActionType} from '../action-types/index';

const initialState : any = [];

const reducer = (state = initialState, action: CommentAction) => {
    switch (action.type) {
        case ActionType.ADDCOMMENT:
            return [action.payload, ...state];

        case ActionType.DELETECOMMENT:
            let index = state.indexOf(action.payload)
                return (
                state.slice(0,index).concat(state.slice(index + 1))
                );

        case ActionType.DELETEALLCOMMENTS:
            return [];

        default:
            return state;
    }
}

export default reducer;