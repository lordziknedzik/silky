import React, {FunctionComponent, useContext} from 'react'
import { LandingContext } from '../contexts/Landing.context';
import {GlobalContext} from '../contexts/Global.context'
import {CustomMarkdown} from './Index.component'

const LandingTwo:FunctionComponent = () => {

    const {headerTwoRich, map}= useContext(LandingContext).data
    const {mainUrl} = useContext(GlobalContext)

    return (
        <div className='landingTwo' style={{ backgroundImage: `url(${mainUrl}${map.data.attributes.url} )`  }}>
            <CustomMarkdown text={headerTwoRich} alternate={true}/>
        </div>
    )
}

export default LandingTwo;