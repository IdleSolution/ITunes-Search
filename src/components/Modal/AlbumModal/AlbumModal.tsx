import React from 'react'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IRootStoreState from '../../../interfaces/storeStates/IRootStoreState';
import { connect } from 'react-redux';
import { Spinner } from '../../Spinner/Spinner';
import ISong from '../../../interfaces/ISong';
import { clearErrors } from '../../../store/actions';
import AlbumDescription from './AlbumDescription';
import SingleSong from './SingleSong';

interface IProps {
    setOpenModal: (open: boolean) => void,
    loading: boolean,
    songs: ISong[],
    error: string | null,
    clearErrors: () => void;
}

const AlbumModal: React.FC<IProps> = ({ setOpenModal, loading, songs, error, clearErrors }) => {
    return (
        <div className={"album-modal"}>
            <div className={"album-modal__card"}>
                <FontAwesomeIcon icon={faTimes} className={"album-modal__icon"} onClick={() => {
                    setOpenModal(false);
                    clearErrors();  
                }}/>

                {loading ? (
                    <Spinner />
                ) : error ? (
                    <div className={"album-modal__error"}>
                        <p>{error}</p>
                    </div>
                ) : (
                    <>
                        <AlbumDescription albumInfo={songs[0]}/>
                        <div className={"album-modal__songs-container"}>
                            <div className={"album-modal__songs"}>
                                {songs.slice(1).map((song: ISong, idx: number) => (
                                    <SingleSong key={idx} trackName={song.trackName!} number={idx + 1} ms={song.trackTimeMillis!}/>
                                ))}

                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state: IRootStoreState) => ({
    loading: state.loading.loading,
    songs: state.songs.songs,
    error: state.errors.error
})


const mapDispatchToProps = (dispatch: any) => ({
    clearErrors: () => dispatch(clearErrors()),

})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumModal)