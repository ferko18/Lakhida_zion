import React from 'react'
import './technical-styles.scss'
import Technicalcards from './Technicalcards'
import Stats from './Stats'

function Technicalcontainer() {
    return (
        <div className='technicalcontainer' >
            <Technicalcards/>
            <Stats/>
        </div>
    )
}

export default Technicalcontainer
