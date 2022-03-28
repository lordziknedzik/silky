import React, {FunctionComponent, useContext} from 'react'
import { cardType } from '../ts/types';
import {GlobalContext} from '../contexts/Global.context'
import {IoIosArrowForward} from 'react-icons/io'
import {GiTrophyCup} from 'react-icons/gi'


interface propsInt {
  card: cardType
}
const Card:FunctionComponent<propsInt> = (props) => {

    const {title, text, img, achievement} = props.card.attributes
    const {mainUrl} = useContext(GlobalContext)


    return (
        <div className='card'>
          <div className='card--overlay'><IoIosArrowForward className='global--icon'/></div>
          <div className='card--image' style={{ backgroundImage: `url(${mainUrl}${img.data.attributes.url} )`  }} />
          <div className='card--container'>
            <h1>{title}</h1>
            <p>{text}</p>
            {achievement.map(achiv => <div key={achiv.id} className='card--achievement'><GiTrophyCup className='card--icon' />{achiv.text}</div>)}
          </div>
        </div>
    )
}

export default Card;