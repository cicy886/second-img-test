import React, {useState} from 'react';
import CardSpread from './CardSpread';


const CardSpreadList = ({card, onUprightCardSelection, onReversalCardSelection, activeCard}) => {

  // const [activeCard, setActiveCard] = useState(0);
  // const randomCards = () => {
  //   setActiveCard(Math.floor(Math.random() * card.length))
  // }

  return (
    <React.Fragment>
      
      {Object.values(card).map((singleCard, index) => (
        // <div onClick={randomCards}>
        <CardSpread 
        whenUprightCardDoubleClicked = {onUprightCardSelection}
        whenReversalCardDoubleClicked = {onReversalCardSelection}
        key = {index}
        id = {index}
        singleCard = {singleCard.name_short}
        name = {singleCard.name}
        rotateCard = {card[activeCard].name_short}
        // whenCardRoate={randomCards}
        // randomCard = {cardArray[randomCard].name_short}
        // whenCardRotate = {onCardRotate}
        // cardArray={cardArray}
        />
        // </div>
      ))}

      
    </React.Fragment>
  )
}

export default CardSpreadList