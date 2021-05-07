import React from 'react'

interface IProps {
    img: string,
    name: string,
    albumId: number,
    modalOpened: (albumId: number) => void,
}

const AlbumCard: React.FC<IProps> = ({ img, name, modalOpened, albumId }) => {
    return (
        <div className={"album-card"} onClick={() => modalOpened(albumId)}>
            <img alt="album" src={img}/>
            <p className={"album-card__name"}>{name}</p>
        </div>
    )
}



export default AlbumCard;
