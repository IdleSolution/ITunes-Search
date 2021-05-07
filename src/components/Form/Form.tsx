import React, { useState } from 'react'
import { Input } from '../Input/Input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { getAlbums } from "./../../store/actions";

interface IProps {
    getAlbums: (name: string) => void
}

const Form: React.FC<IProps> = ({getAlbums}) => {
    const [inputValue, changeInputValue] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            getAlbums(inputValue);
        }} className={"homepage__input"}>
            <Input value={inputValue} onChange={changeInputValue} placeholder={"Type album's or author's name"} />
            <FontAwesomeIcon icon={faSearch} className={"homepage__input-icon"} onClick={() => getAlbums(inputValue)}/>
        </form>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    getAlbums: (name: string) => dispatch(getAlbums(name))
})

export default connect(null, mapDispatchToProps)(Form);