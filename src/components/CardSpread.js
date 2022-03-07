import React from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import cardBack from "./../img/themes/backOfTheCard.jpg";

const CardSpread = (props) => {
  const [isFlipped, setFlipped] = React.useState(false);

  // function animateCard(){
  //   let angle = Math.random() * 90 - 45;
  //   let xPos = Math.random() * 40 - 20;
  //   let yPos = Math.random() * 40 - 20;
  //   let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  //   return transform;
  // }

  const animateCard = () => {

    let transform = `rotate(180deg)`;
    return transform;
  }

  return (
    <React.Fragment>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          id='cardImage'
          className="cardFront"
          onClick = {() => setFlipped((prev) => !prev) }
        >
          <div
          className="randomCardRotate"
          onClick={()=>props.randomlyRotateCard(props.id)}
          >
            <div>
            <span className="card" role="img" aria-label="cards">
            <img src={cardBack} alt='back of the card'/>
            </span>
          </div>
        </div>
            </div>
          

        <div
          onDoubleClick={() => props.whenCardDoubleClicked(props.id)}
          // onClick={()=>props.randomlyRotateCard(props.id)}
          className="CardBack"
        >
          <img src={require(`./../img/cards/${props.singleCard}.jpg`)} alt={props.name} />
          <img src={require(`./../img/cards/${props.singleCard}.jpg`)} alt={props.name} style={{ transform:animateCard()}} />
        </div>
      </ReactCardFlip>

    </React.Fragment>
  );
}

CardSpread.propTypes = {
  singleCard: PropTypes.string,
  name: PropTypes.string,
  whenCardDoubleClicked: PropTypes.func,
  whenCardSingleClicked: PropTypes.func,
};

export default CardSpread;