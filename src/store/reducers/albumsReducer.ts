import IReducerAction from "../../interfaces/IReducerAction";
import IAlbumState from "../../interfaces/storeStates/IAlbumState";
import * as actions from "./../actions/ActionTypes";


const initialState: IAlbumState = {
    albums: [],
    searched: false,
    searchString: ""
}

const reducer = (state: IAlbumState = initialState, action: IReducerAction): IAlbumState => {
    switch(action.type) {
        case actions.LOAD_ALBUMS:
            return {
                ...state,
                albums: action.payload!.albums,
                searchString: action.payload!.searchString,
                searched: true
            }
        case actions.UNLOAD_ALBUMS:
            return {
                ...state,
                albums: [],
                searched: false,
                searchString: ""
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;