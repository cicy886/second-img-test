import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import CardDetailPopup from "./CardDetailPopup";

function App() {
  const API_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/";

  // reqType use for random route
  const [reqType, setReqType] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popupTrigger, setPopupTrigger] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        <div>Error: {error.message}</div>;
      }
    };

    fetchCards();
  }, [reqType]);

  const handleChangingSelectedCard = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setPopupTrigger(true);
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="mainContainer">
          {Object.values(cards).map((card, index) => (
            <div className="theCard" key={index}>
              <div className="theFront">
                <CardList
                  key={index}
                  card={card}
                  id={index}
                  onCardSelection={handleChangingSelectedCard}
                />
              </div>
              <div className="theBack">
              <img
                src={require("./../img/themes/backOfTheCard.jpg")}
                alt="back of the card"
              />
              </div>
            </div>
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
}

export default App;
