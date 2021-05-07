import IAlbumState from "./IAlbumState";
import IErrorState from "./IErrorState";
import ILoadingState from "./ILoadingState";
import ISongState from "./ISongState";

export default interface IRootStoreState {
    albums: IAlbumState,
    loading: ILoadingState,
    songs: ISongState,
    errors: IErrorState
}