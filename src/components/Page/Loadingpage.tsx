import React from 'react'
import { Spinner } from '../Spinner/Spinner'

const Loadingpage = () => {
    return (
        <div role="loading" className={"loadingpage"}>
            <Spinner />
        </div>
    )
}

export default Loadingpage;