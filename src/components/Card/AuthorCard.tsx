import React from 'react'
import IAlbum from '../../interfaces/IAlbum';

interface IProps {
    artistName: string,
    albums: IAlbum[]
}

const AuthorCard: React.FC<IProps> = ({ artistName, albums }) => {
    return (
        <div className={"author-card"}>
            <h2 className={"author-card__heading"}>{artistName}</h2>
            <div className={"author-card__line"}></div>
            <div className={"author-card__albums"}>{albums}</div>
        </div>
    )
}

export default AuthorCard;
