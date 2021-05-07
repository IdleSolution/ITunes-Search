import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { connect } from 'react-redux';
import { unloadAlbums, clearErrors } from '../../store/actions';

interface IProps {
    message: string,
    unloadAlbums: () => void,
    clearErrors: () => void,
}

const Errorpage: React.FC<IProps> = ({ message, unloadAlbums, clearErrors }) => {
    return (
        <div className={"albumspage__nofound"} role="errorspage">
            <FontAwesomeIcon icon={faArrowLeft} className={"albumspage__icon"} onClick={() => {
                unloadAlbums();
                clearErrors();
            }}/>
            <h1>{message}</h1>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    unloadAlbums: () => dispatch(unloadAlbums()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(null, mapDispatchToProps)(Errorpage);