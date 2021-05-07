import { createStore, applyMiddleware, combineReducers } from "redux";
import albumsReducer from "./reducers/albumsReducer";
import loadingReducer from "./reducers/loadingReducer";
import songsReducer from "./reducers/songsReducer";
import errorsReducer from "./reducers/errorsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    albums: albumsReducer,
    loading: loadingReducer,
    songs: songsReducer,
    errors: errorsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

