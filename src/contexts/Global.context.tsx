import React, {FunctionComponent, createContext} from "react";
import LandingContextProvider from './Landing.context';
import CardContextProvider from './Card.context'
import OfferContextProvider from './Offers.context'

interface globalContextInt {
  mainUrl: string
  landingUrl: string
  cardUrl: string
  jobsUrl: string
}

export const GlobalContext = createContext<globalContextInt>({} as globalContextInt)


const GlobalContextProvider: FunctionComponent = ({children}) => {

  const mainUrl = 'http://localhost:1337'
  const landingUrl =`${mainUrl}/api/landing-page?populate=*`
  const cardUrl =  `${mainUrl}/api/cards?populate=*`
  const jobsUrl =  `${mainUrl}/api/jobs?populate=*`

  return (
    <GlobalContext.Provider value={{mainUrl, landingUrl, cardUrl, jobsUrl}}>
      <CardContextProvider>
        <LandingContextProvider>
          <OfferContextProvider>
            {children}
          </OfferContextProvider>
        </LandingContextProvider>
      </CardContextProvider>
    </GlobalContext.Provider>
  )

}


export default GlobalContextProvider;