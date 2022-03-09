import React from 'react';
import CardSpread from './CardSpread';


const CardSpreadList = ({card, onCardSelection}) => {
  return (
    <React.Fragment>
      {Object.values(card).map((singleCard, index) => (
        <CardSpread 
        whenCardDoubleClicked = {onCardSelection}
        // randomlyRotateCard = {onRandomCardArray}
        key = {index}
        id = {index}
        singleCard = {singleCard.name_short}
        name = {singleCard.name}
        />
      ))}
    </React.Fragment>
  )
}

export default CardSpreadList