import React, {FunctionComponent, useContext} from 'react'
import { LandingContext } from '../contexts/Landing.context';
import {CustomMarkdown} from './Index.component'

const LandingOne:FunctionComponent = () => {

    const {data}= useContext(LandingContext)

    return (
        <div className='landingOne'>
          <div className="landingOne--Container">

            <CustomMarkdown text={data.headerOneRich} alternate={false}/>

          </div>
          <div className="landingOne--Container">

          </div>

        </div>
    )
}

export default LandingOne;