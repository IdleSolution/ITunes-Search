import React from 'react'
import milisToMinutesAndSeconds from '../../../utils/milisToMinutesAndSeconds';

interface IProps {
    trackName: string,
    number: number,
    ms: number
}

const SingleSong: React.FC<IProps> = ({ trackName, number, ms }) => {
    return (
        <div> 
            <div className={"album-modal__song"}>
                <p>{number}. {trackName}</p>
                <p>{milisToMinutesAndSeconds(ms)}</p>
            </div>
        </div>
    )
}

export default SingleSong;