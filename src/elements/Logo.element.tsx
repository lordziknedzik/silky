import React, {FunctionComponent, useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {GlobalContext} from '../contexts/Global.context'
import {LandingContext} from '../contexts/Landing.context'

interface propsInt {
    useAsLink?: boolean
}

const Logo:FunctionComponent<propsInt> = (props) => {

    const {mainUrl} = useContext(GlobalContext)
    const {data} = useContext(LandingContext)


    if (!props.useAsLink) return (

        <div className='global--logo global--logo__noPointer' 
        style={{ backgroundImage: `url(${mainUrl}${data.logo.data.attributes.url} )`  }}
    />
    )

    return (
        <Link to='/' className='global--logo' 
            style={{ backgroundImage: `url(${mainUrl}${data.logo.data.attributes.url} )`  }}
    />
    )
}

export default Logo;