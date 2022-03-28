import React, {FunctionComponent, useContext} from 'react'
import { LandingContext } from '../contexts/Landing.context';
import {CardContext} from '../contexts/Card.context'
import {CustomMarkdown, Card} from './Index.component'

const LandingSix:FunctionComponent = () => {

    const {data} = useContext(LandingContext)
    const {cards} = useContext(CardContext)
    const {headerSixRich} = data
    
    const botCards = cards.filter(card => card.attributes.location === 'landingBottom').slice(0,3)
    
    return (
        <div className='landingSix'>
            <CustomMarkdown text={headerSixRich} alternate={false} />
            <div className='global--cardContainer'>
                {botCards.map((card, index: number) => <Card card={card} key={index}/>)}
            </div>
            <button className='global--button'>Poznaj nasze zespoły</button>
        </div>
    )
}

export default LandingSix;