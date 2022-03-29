import React, {FunctionComponent, useContext, useState, useEffect} from 'react'
import {OfferContext} from '../contexts/Offers.context'
import { LandingContext } from '../contexts/Landing.context';
import { CustomMarkdown } from './Index.component'
import { offerType } from '../ts/types';



const LandingJobOffers:FunctionComponent = () => {

    const {offers} = useContext(OfferContext)
    const {data} = useContext(LandingContext)
    const {headerSevenRich} = data
    const [filterValue, setFilterValue] = useState<string>('')
    const [offersToShow, setOffersToShow] = useState<offerType[]>(offers)

    useEffect(() => {
      const tempOffers = offers.filter(offer => offer.attributes.title.toLowerCase().includes(filterValue.toLowerCase()) )
      setOffersToShow(tempOffers)
    },[filterValue])

    return (
        <div className='landingJobOffers'>
          <div className="landingJobOffers--container landingJobOffers--container__centered">
            <div className="landingJobOffers--content">
              <CustomMarkdown text={headerSevenRich} alternate={true}/>
              <div className='landingJobOffers--search'>
                <input className='landingJobOffers--search__input' value={filterValue} onChange={(event) => setFilterValue(event.target.value)} placeholder='Jakie stanowisko cię interesuje?'/>
                <button className='landingJobOffers--search__button'>Szukaj</button>
              </div>
            </div>
          </div>
          <div className="landingJobOffers--container">
            <div className="landingJobOffers--box">
              {filterValue.toLowerCase() === 'dupa' && <div>Sam żeś dupa</div>}
              {offersToShow.length > 0 && offersToShow.map(offer => 
              <div className='landingJobOffers--offer'>
                <div className='landingJobOffers--offer__element'>{offer.attributes.title}</div>
                <div className='landingJobOffers--offer__element'>{offer.attributes.type}</div>
                <div className='landingJobOffers--offer__element'>{offer.attributes.location}</div>
                <div className='landingJobOffers--offer__element'>{offer.attributes.activeUntil}</div>  
              </div>)}
              {offersToShow.length === 1 && <div>To coś dla Ciebie</div>}
              {offersToShow.length === 0 && <div>Jesteś chujowy nie chcemy cie</div>}
              
              </div>
              <div className='spierdalajNaDol'><button className='global--button'>Sprawdź oferty pracy</button></div>
            
          </div>
        </div>
    )
}

export default LandingJobOffers;