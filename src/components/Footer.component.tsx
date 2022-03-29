import React, {FunctionComponent, useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {LandingContext} from '../contexts/Landing.context'
import {GlobalContext} from '../contexts/Global.context'
import {Logo} from '../elements/Index.element'
const Footer:FunctionComponent = () => {

    type linkType = {
        to: string,
        text: string
    }

    const {pathname}:{pathname: string} = useLocation()
    const {data} = useContext(LandingContext)
    const {mainUrl} = useContext(GlobalContext)

    return (
        <footer className='footer'>
            <Logo useAsLink={false}/>
            <div></div>
            <div></div>
Footer
        </footer>
    )
}

export default Footer;