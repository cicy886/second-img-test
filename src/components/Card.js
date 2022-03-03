import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <React.Fragment>
      <div className = "card" onClick = {() => props.whenCardClicked(props.id)}>
      <img src = {require(`./../img/cards/${props.singleCard}.jpg`)} alt={props.name}/>
      </div>
    </React.Fragment>
  )
}

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  whenCardClicked: PropTypes.func
}

export default Card;