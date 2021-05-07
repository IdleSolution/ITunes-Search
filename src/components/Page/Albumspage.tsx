import React, { useState } from 'react'
import IRootStoreState from '../../interfaces/storeStates/IRootStoreState';
import { connect } from "react-redux";
import IAlbum from '../../interfaces/IAlbum';
import AuthorCard from '../Card/AuthorCard';
import AlbumCard from '../Card/AlbumCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { unloadAlbums, getSongs } from "./../../store/actions";
import AlbumModal from '../Modal/AlbumModal/AlbumModal';
import Errorpage from './Errorpage';


interface IProps {
    albums: IAlbum[],
    searchString: string,
    unloadAlbums: () => void,
    getSongs: (albumId: number) => void,
}

const Albumspage: React.FC<IProps> = ({ albums, searchString, unloadAlbums, getSongs }) => {
    const [openModal, setOpenModal] = useState(false);

    const modalOpened = (albumId: number) => {
        getSongs(albumId);
        setOpenModal(true);
    }

    const dict: {[name: string] : any} = {}

    // loop through albums and assign them to their authors
    albums.forEach(album => {
        if(!dict[album.artistName]) {
            dict[album.artistName] = [];
        }
        dict[album.artistName].push(
            <AlbumCard key={album.collectionId}
             img={album.artworkUrl100} name={album.collectionName} albumId={album.collectionId} modalOpened={modalOpened} />
        )
    })
    const arr = [];
    for (const [key, value] of Object.entries(dict)) {
        arr.push(
            <AuthorCard key={key} artistName={key} albums={value}/>
        )
    }
    return (
        <div role="albumspage">
        {openModal && (
            <AlbumModal setOpenModal={setOpenModal}/>
        )}
        {arr.length > 0 ? (
            <div className={"albumspage"}>
                <FontAwesomeIcon icon={faArrowLeft} className={"albumspage__icon"} onClick={unloadAlbums}/>
                <h1>Search results for "{searchString}"</h1>
                {arr}
            </div>
        ) : (
            <Errorpage message={`No results found for ${searchString}`}/>
        )}
        </div>

    )
}

const mapPropsToState = (state: IRootStoreState) => {
    return {
        albums: state.albums.albums,
        searchString: state.albums.searchString,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    unloadAlbums: () => dispatch(unloadAlbums()),
    getSongs: (albumId: number) => dispatch(getSongs(albumId)),

})

export default connect(mapPropsToState, mapDispatchToProps)(Albumspage);