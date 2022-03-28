import React, {FunctionComponent, useContext} from 'react'
import { LandingContext } from '../contexts/Landing.context';
import { GlobalContext } from '../contexts/Global.context';

const LandingThree:FunctionComponent = () => {

    const {data} = useContext(LandingContext)
    const {mainUrl} = useContext(GlobalContext)
    const {paragraphThree, headerThree, reserved, sinsay, house, mohito, cropp } = data

    const logos = [reserved, sinsay, house, mohito, cropp]


    return (
        <div className='landingThree'>
            <div className="landingThree--container">
                <h1 className='global--title global--text__alignCenter'>{headerThree} </h1>
                <p className='global--paragraph global--paragraph__grey global--text__alignCenter'>{paragraphThree}</p>
            </div>
            <div className='landingThree--logoContainer'>
                {logos.map(logo =>
                     <div key={logo.data.attributes.url}
                        className='landingThree--logo'
                        style={{ backgroundImage: `url(${mainUrl}${logo.data.attributes.url} )`  }} 
                    /> 
                    )}
            </div>
            <button className='global--button'>Przycisk</button>
        </div>
    )
}

export default LandingThree;