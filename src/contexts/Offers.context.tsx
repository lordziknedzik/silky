import React, {FunctionComponent, createContext, useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {imgType, offerType} from '../ts/types'
import {GlobalContext} from './Global.context'

interface OfferContextInt { offers: offerType[], loading: boolean}
type respType = { data: { data: offerType[] }}

export const OfferContext = createContext<OfferContextInt>({} as OfferContextInt)

const OfferContextProvider: FunctionComponent = ({children}) => {

  const [offers, setOffers] = useState<offerType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  const {jobsUrl} = useContext(GlobalContext)
  
  useEffect(() => {
    axios.get(jobsUrl).then((resp: respType) => setOffers(resp.data.data)).finally(() => setLoading(false))
  }, [])

  return (
    <OfferContext.Provider value={{offers, loading}}>
      {children}
    </OfferContext.Provider>
)
}

export default OfferContextProvider;