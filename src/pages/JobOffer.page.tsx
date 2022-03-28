import React, {FunctionComponent} from 'react'
import { Link, useLocation } from 'react-router-dom'


const JobOffer:FunctionComponent = () => {

  const {pathname}:{pathname: string} = useLocation()

    return (
        <div className=''>
          {pathname}fgdfg
        </div>
    )
}

export default JobOffer;