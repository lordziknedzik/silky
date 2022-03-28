import React, {FunctionComponent, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Landing, Join, Contact, About, Projects, Teams, JobOffer} from './Index.page'
import {LandingContext} from '../contexts/Landing.context'

const Main:FunctionComponent = () => {


    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/join' element={<Join />}/>
                <Route path='/teams' element={<Teams />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/jobs/:id' element={<JobOffer />} />
            </Routes>
        </main>
    )
}

export default Main;