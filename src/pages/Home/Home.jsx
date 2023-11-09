import React from 'react'
import ShowCase from '../../Components/ShowCase/ShowCase'
import Countrys from '../../Components/Countrys/Countrys'
import Reys from '../../Components/Reys/Reys'
import Swipper from '../../Components/Swipper/Swipper'
import Main from '../../Components/Main/Main'

function Home() {
    return (
        <div>
            <Main/>
            {/* <ShowCase /> */}
            <Countrys />
            <Reys />
            <Swipper />/
        </div>
    )
}

export default Home