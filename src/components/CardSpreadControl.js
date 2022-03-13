import React, { useState, useEffect } from "react";
import CardSpreadList from './CardSpreadList';
import CardDetailPopup from "./CardDetailPopup";
import CardUprightDetailPopup from './CardUprightDetailPopup';
import CardReversalDetailPopup from './CardReversalDetailPopup';


const CardSpreadControl = () => {

  const randomizeNumber = () => {
    const number = Math.floor(Math.random() * 4);
    return number;
  }
  
  const API_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=5";

  // const [reqType, setReqType] = useState("random?n=5");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [uprightPopupTrigger, setUprightPopupTrigger] = useState(false);
  const [reversalPopupTrigger, setReversalPopupTrigger] = useState(false);
  // const [value,setValue] = useState();
  const [activeCard, setActiveCard] = useState(randomizeNumber());
  const handleRandomCards = () => {
    setActiveCard(Math.floor(Math.random() * cards.cards.length))
  }
  // const [randomCard, setRandomCard] = useState(0);
  // const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        <div>Error: {error.message}</div>;
      }
    };

    fetchCards();
  }, []);

  const handleChangingSelectedCard = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setPopupTrigger(true);
  };

  const handleChangingSelectedCardUpright = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setUprightPopupTrigger(true);
  };

  const handleChangingSelectedCardReversal = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setReversalPopupTrigger(true);
  };

  const handleRefresh = ()=>{
    // it re-renders the component
    window.location.reload();
}
  
  
  // const handleRandomCard = (id) => {
  //   setRandomCard(randomCard.concat(cards.cards[id]));
  //   const shuffled = [...randomCard].sort(()=>0.5-Math.random());
  //   const num= Math.floor(Math.random()*4);
  //   return shuffled.slice(0,num);
  // }

  // const handleCardRotate = () =>
  // {
  //   const cardArray=cards.cards;
  //   setCardArray(cardArray);
  //   // const randomCard = cardArray[Math.floor( Math.random()*cardArray.length)];
  //   // setRandomCard(randomCard);
  //   setRandomCard(Math.floor(Math.random() * cardArray.length));
  //   // if(cardArray[randomCard].name_short = selectedCard.name_short){
  //   //   <img src='' />
  //   // }
  // };



  return (
    <React.Fragment>
      <div className="main">
        {/* <ResetSpreadCard 
        onRefresh={handleRefresh}
        onRandomCards={handleRandomCards}/> */}

        <div
          className="container-fluid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "10px 130px",
          }}
        >
          {Object.values(cards).map((card, index) => (
            <CardSpreadList
              key={index}
              card={card}
              id={index}
              activeCard={activeCard}
              onUprightCardSelection={handleChangingSelectedCardUpright}
              onReversalCardSelection={handleChangingSelectedCardReversal}
              // onCardRotate={handleCardRotate}
              // randomCard={randomCard}
              // cardArray={cardArray}
            />
          ))}
        </div>
        <button className='shuffle-btn' onClick={handleRefresh}>Try Again!</button>
      </div>
      <CardUprightDetailPopup
        uprightPopupTrigger={uprightPopupTrigger}
        setUprightPopupTrigger={setUprightPopupTrigger}
        selectedCard={selectedCard}
      />
      <CardReversalDetailPopup
        reversalPopupTrigger={reversalPopupTrigger}
        setReversalPopupTrigger={setReversalPopupTrigger}
        selectedCard={selectedCard}
      />
    </React.Fragment>
  );
};

export default CardSpreadControl;