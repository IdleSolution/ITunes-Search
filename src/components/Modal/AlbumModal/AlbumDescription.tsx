import React from 'react';
import ISong from '../../../interfaces/ISong';

interface IProps {
    albumInfo: ISong
}

const AlbumDescription: React.FC<IProps> = ({ albumInfo }) => {
    return (
        <div className={"album-modal__info"}>
        <div className={"album-modal__desc"}>
            <img src={albumInfo.artworkUrl100} alt="album"/>
            <div>
                <h1 className={albumInfo.collectionName.length > 30 ? "album-modal__heading--small" : "album-modal__heading"}>
                    {albumInfo.collectionName}
                </h1>
                <p>Artist: <span>{albumInfo.artistName}</span> | Genre: <span>{albumInfo.primaryGenreName} </span> 
                    | Country: <span>{albumInfo.country}</span>
                </p>
            </div>
        </div>
    </div>
    )
}

export default AlbumDescription;