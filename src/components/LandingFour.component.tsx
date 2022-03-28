import React, {FunctionComponent, useContext} from 'react'
import { LandingContext } from '../contexts/Landing.context';
import {CardContext} from '../contexts/Card.context'
import {CustomMarkdown, Card} from './Index.component'

const LandingFour:FunctionComponent = () => {

    const {data} = useContext(LandingContext)
    const {cards} = useContext(CardContext)
    const {headerFourRich} = data
    
    const topCards = cards.filter(card => card.attributes.location === 'landingTop').slice(0,3)

    return (
        <div className='landingFour'>
            <CustomMarkdown text={headerFourRich} alternate={true} />
            <div className='global--cardContainer'>
                {topCards.map((card, index: number) => <Card card={card} key={index}/>)}
            </div>
            <button className='global--button'>Poznaj nasze projekty</button>
        </div>
    )
}

export default LandingFour;