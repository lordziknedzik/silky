import React, {FunctionComponent, useContext} from 'react'
import {LandingContext} from '../contexts/Landing.context';
import {GlobalContext} from '../contexts/Global.context'


const LandingFive:FunctionComponent = () => {

    const {data} = useContext(LandingContext)
    const {paragraphFive, headerFive, ryje}  = data

    const {mainUrl} = useContext(GlobalContext)

    return (
        <div className='landingFive'>
            <div className='landingFive--container'>
                <div className="landingFive--img"
                    style={{ backgroundImage: `url(${mainUrl}${ryje.data.attributes.url} )`  }}
                ></div>
            </div>
            <div className='landingFive--container'>
                <div className="landingFive--content">
                    <h1 className='global--title global--title__black'>{headerFive}</h1>
                    <p className='global--paragraph global--paragraph__lineHeightL'>{paragraphFive}</p>
                    <button className='global--button'>Zobacz, jak działamy</button>
                </div>
            </div>
        </div>
    )
}

export default LandingFive;