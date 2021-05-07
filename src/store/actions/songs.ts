import ISong from "../../interfaces/ISong";
import * as actions from "./ActionTypes";
import { newError } from "./errors";
import { startLoading, stopLoading } from "./loading";

export const getSongs = (albumId: number) => async (dispatch: any) => {
    dispatch(startLoading());
    try {
        // There is a problem with the API and it sometimes throws a CORS error that I couldn't fix
        const res = await fetch(`https://itunes.apple.com/lookup?id=${albumId}&entity=song`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
              }
            }
        );
        const result = await res.json();
        const songs: ISong[] = result.results;
        dispatch(setSongs(songs));
    } catch(e) {
        dispatch(newError("Something went wrong while fetching the songs. It might be a problem with CORS that was occuring for some songs randomly."))
    } finally {
        dispatch(stopLoading());
    }
}

const setSongs = (songs: ISong[]) => {
    return {
        type: actions.LOAD_SONGS,
        payload: {
            songs
        }
    }
}