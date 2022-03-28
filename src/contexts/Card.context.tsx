import React, {FunctionComponent, createContext, useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {imgType, cardType} from '../ts/types'
import {GlobalContext} from './Global.context'

interface cardContextInt { cards: cardType[], loading: boolean}
type respType = { data: { data: cardType[] }}

export const CardContext = createContext<cardContextInt>({} as cardContextInt)

const CardContextProvider: FunctionComponent = ({children}) => {

  const [cards, setCards] = useState<cardType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  const {cardUrl} = useContext(GlobalContext)

  useEffect(() => {
    axios.get(cardUrl).then((resp: respType) => setCards(resp.data.data)).finally(() => setLoading(false))
  }, [])

  return (
    <CardContext.Provider value={{cards, loading}}>
      {children}
    </CardContext.Provider>
)
}

export default CardContextProvider;