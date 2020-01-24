import React from 'react'
import Introcontainer from '../../components/homeintro/Introcontainer'
import Servicecontainer from '../../components/homeservice/Servicecontainer'
import Technicalcontainer from '../../components/hometechnical/Technicalcontainer'



const Home = () => {
    return (
        <div>
          
            <Introcontainer/>
            <Servicecontainer/>
            <Technicalcontainer/>
    
        </div>
    )
}

export default Home
