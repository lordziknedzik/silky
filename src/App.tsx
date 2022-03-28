import React, {FunctionComponent, useContext} from 'react'
import {Main} from'./pages/Index.page'
import {Footer, Header} from './components/Index.component'
import {LandingContext} from './contexts/Landing.context'
import { CardContext } from './contexts/Card.context';
import { OfferContext } from './contexts/Offers.context';
 
const App:FunctionComponent = () => {

    const {loading} = useContext(LandingContext)
    const {loading: cardLoading} = useContext(CardContext)
    const {loading: jobsLoading} = useContext(OfferContext)


    if (loading || cardLoading || jobsLoading) return (<>Loading</>)
     
    return (
        <div className=''>

          <Header />
          <Main />
          <Footer />
        </div>
    )
}

export default App;