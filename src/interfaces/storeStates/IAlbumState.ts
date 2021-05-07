import IAlbum from "../IAlbum";

export default interface IAlbumState {
    albums: IAlbum[],
    searched: boolean,
    searchString: string
}