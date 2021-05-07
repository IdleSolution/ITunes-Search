import React from 'react'
import Form from '../Form/Form'

const Homepage = () => {
    return (
        <div className={"homepage"}>
            <div className={"homepage__background"}>
                <img src={"listening.svg"} alt="background"/>
            </div>
            <Form />
        </div>
    )
}

export default Homepage;