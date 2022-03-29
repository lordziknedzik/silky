import React, {FunctionComponent, createContext, useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {imgType} from '../ts/types'
import { GlobalContext } from './Global.context';

type respType = { data: { data: { attributes: strapiDataType} }}


type strapiDataType = {headerThree: string, paragraphThree: string, headerOneRich: string, headerTwoRich: string, logo: imgType, headerFourRich: string, 
  map: imgType, reserved:imgType, cropp: imgType, house: imgType, ryje:imgType, mohito: imgType, sinsay: imgType, headerFive: string, paragraphFive: string,
  headerSixRich: string, headerSeven: string, paragraphSeven: string, headerSevenRich: string,
}



interface landingContextInt {data: strapiDataType, loading: boolean}


export const LandingContext = createContext<landingContextInt>({} as landingContextInt)

const LandingContextProvider:FunctionComponent = ({children}) => {

    const [data, setData] = useState<strapiDataType>({} as strapiDataType)
    const [loading, setLoading] = useState<boolean>(true)
    const {landingUrl} = useContext(GlobalContext)

    useEffect(() => {
      axios.get(landingUrl).then((response: respType) => { setData(response.data.data.attributes) }).finally(() => setLoading(false))
    },[])

    return (
        <LandingContext.Provider value={{data, loading}}>
          {children}
        </LandingContext.Provider>
    )
}

export default LandingContextProvider;