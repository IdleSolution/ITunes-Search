import IReducerAction from "../../interfaces/IReducerAction";
import ILoadingState from "../../interfaces/storeStates/ILoadingState";
import * as actions from "./../actions/ActionTypes";

const initialState: ILoadingState = {
    loading: false
}

const reducer = (state: ILoadingState = initialState, action: IReducerAction) => {
    switch(action.type) {
        case actions.START_LOADING:
            return {
                ...state,
                loading: true
            }
        case actions.STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;