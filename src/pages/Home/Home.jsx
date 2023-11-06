import React from 'react'
import ShowCase from '../../components/ShowCase/ShowCase'
import Countrys from '../../components/Countrys/Countrys'
import Reys from '../../components/Reys/Reys'
import Swipper from '../../components/Swipper/Swipper'
import Main from '../../components/Main/Main'

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