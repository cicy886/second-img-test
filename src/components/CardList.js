import React from 'react';
import Card from './Card';
// import CardSpread from './CardSpread';

const CardList = ({card, onCardSelection}) => {
  return (
    <React.Fragment>
      {Object.values(card).map((singleCard, index) => (
        <Card 
        whenCardDoubleClicked = {onCardSelection}
        key = {index}
        id = {index}
        singleCard = {singleCard.name_short}
        name = {singleCard.name}
        />
      ))}
    </React.Fragment>
  )
}

export default CardList