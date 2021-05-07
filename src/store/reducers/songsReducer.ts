import IReducerAction from "../../interfaces/IReducerAction";
import ISongState from "../../interfaces/storeStates/ISongState";
import * as actions from "./../actions/ActionTypes";

const initialState: ISongState = {
    songs: []
}

const reducer = (state: ISongState = initialState, action: IReducerAction) => {
    switch(action.type) {
        case actions.LOAD_SONGS:
            return {
                ...state,
                songs: action.payload!.songs
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;