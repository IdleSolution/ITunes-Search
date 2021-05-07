import IReducerAction from "../../interfaces/IReducerAction";
import IErrorState from "../../interfaces/storeStates/IErrorState";
import * as actions from "./../actions/ActionTypes";


const initialState: IErrorState = {
    error: null
}

const reducer = (state: IErrorState = initialState, action: IReducerAction) => {
    switch(action.type) {
        case actions.NEW_ERROR:
            return {
                ...state,
                error: action.payload!.error
            }
        case actions.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;