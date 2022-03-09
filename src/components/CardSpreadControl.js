import React, { useState, useEffect } from "react";
import CardSpreadList from './CardSpreadList';
import CardDetailPopup from "./CardDetailPopup";


const CardSpreadControl = () => {
  const API_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=5";

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [randomCard, setRandomCard] = useState([]);

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
    // setRandomCard(randomCard.concat(selectedCard));
    // let randomImageIndex = Math.floor( Math.random()*randomCard.length);
    
    setPopupTrigger(true);
  };
  
  // const handleRandomCard = (id) => {
  //   setRandomCard(randomCard.concat(cards.cards[id]));
  //   const shuffled = [...randomCard].sort(()=>0.5-Math.random());
  //   const num= Math.floor(Math.random()*4);
  //   return shuffled.slice(0,num);
  // }

  return (
    <React.Fragment>
      <div className="main">
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
              onCardSelection={handleChangingSelectedCard}
              // onRandomCardArray={handleRandomCard}
            />
          ))}
        </div>
      </div>
      <CardDetailPopup
        popupTrigger={popupTrigger}
        setPopupTrigger={setPopupTrigger}
        selectedCard={selectedCard}
      />
    </React.Fragment>
  );
};

export default CardSpreadControl;