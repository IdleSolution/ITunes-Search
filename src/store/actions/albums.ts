import * as actions from "./ActionTypes";
import IReducerAction from "../../interfaces/IReducerAction";
import { startLoading, stopLoading } from "./loading";
import IAlbum from "../../interfaces/IAlbum";
import { newError } from "./errors";

export const getAlbums = (name: string) => async (dispatch: any) => {
    dispatch(startLoading());
    try {
        const res = await fetch(`https://itunes.apple.com/search?term=${name}&entity=album`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
              }
        });
        const result = await res.json();
        const albums: IAlbum[] = result.results;
        dispatch(setAlbums(albums, name));
    } catch(e) {
        dispatch(newError("Something went wrong while fetching albums"));
    } finally {
        dispatch(stopLoading());
    }

}

const setAlbums = (albums: IAlbum[], str: string): IReducerAction => {
    return {
        type: actions.LOAD_ALBUMS,
        payload: {
            albums: albums,
            searchString: str
        }
    }
}

export const unloadAlbums = () => {
    return {
        type: actions.UNLOAD_ALBUMS
    }
}