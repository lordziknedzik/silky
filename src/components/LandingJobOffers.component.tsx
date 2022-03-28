import React, {FunctionComponent, useContext} from 'react'
import {OfferContext} from '../contexts/Offers.context'
import { LandingContext } from '../contexts/Landing.context';



const LandingJobOffers:FunctionComponent = () => {

    const {offers} = useContext(OfferContext)
    const {data} = useContext(LandingContext)
    const {headerSeven, paragraphSeven} = data


    return (
        <div className='landingJobOffers'>
          <div className="landingJobOffers--container">
            <div className="landingJobOffers--content">
              <div>{headerSeven}</div>
              <div>{paragraphSeven}</div>
            </div>
          </div>
          <div className="landingJobOffers--container">

            <div className="landingJobOffers--offer">
              {offers.map(offer => 
              <div className='landingJobOffers--offer'>
                <div>{offer.attributes.title}</div>
                <div>{offer.attributes.type}</div>
                <div>{offer.attributes.location}</div>
                <div>{offer.attributes.activeUntil}</div>

                
              </div>)}
            </div>

          </div>
        </div>
    )
}

export default LandingJobOffers;