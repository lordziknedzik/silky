import React, {FunctionComponent, useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs'
import {LandingContext} from '../contexts/Landing.context'
import {GlobalContext} from '../contexts/Global.context'
import {Logo} from '../elements/Index.element'

const Header:FunctionComponent = () => {

    type linkType = {
        to: string,
        text: string
    }

    const links: linkType[] = [
        {to: '/about', text:"Kim jesteśmy"},
        {to: '/projects', text:"Nasze projekty"},
        {to: '/teams', text:"Nasze zespoły"},
        {to: '/join', text:"Dołącz do nas"},
    ]

    const {pathname}:{pathname: string} = useLocation()
    const {data} = useContext(LandingContext)
    const {mainUrl} = useContext(GlobalContext)



    return (
        <header className='header'>
            <Logo />
            <nav className='header--nav'>
                <div className='header-links'>
                    {links.map((link: linkType) => <Link key={link.text} className={`global--link ${pathname === link.to && 'global--link__active'}`} to={link.to}>{link.text} </Link>)}
                </div>
                <div className='header--contact'>
                    <Link to='/contact' className={`global--link`} >Skontaktuj się z nami</Link>
                    <Link className='global--link' to='linkedin.com'> <BsLinkedin className='global--icon global--icon__round'/></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;