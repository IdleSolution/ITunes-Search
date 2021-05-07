export default interface ISong {
    wrapperType: string,
    artistName: string,
    collectionName: string,
    trackName?: string,
    releaseDate: string,
    primaryGenreName: string,
    artworkUrl100: string,
    trackTimeMillis?: number,
    country: string,
}