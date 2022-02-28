import React from 'react'

const Card = (props) => {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenCardClicked(props.id)}>
      <img src = {require(`./../img/cards/${props.singleCard}.jpg`)} alt={props.name}/>
      </div>
    </React.Fragment>
  )
}

export default Card