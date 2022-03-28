import React, {FunctionComponent} from 'react'
import {LandingOne, LandingTwo, LandingThree, LandingFour,LandingFive, LandingSix, LandingJobOffers} from '../components/Index.component'


const Landing:FunctionComponent = () => {

    return (
        <div className='landing'>
            {/* <LandingOne />
            <LandingTwo />
            <LandingThree />
            <LandingFour />
            <LandingFive />
            <LandingSix /> */}
            <LandingJobOffers />
        </div>
    )
}

export default Landing;