import React, { useState, useEffect } from 'react';
import CardList from './CardList';

const App = () => {

    const API_URL = 'https://rws-cards-api.herokuapp.com/api/v1/cards/';
    //const [reqType, setReqType] =useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [PopupTrigger, setPopupTrigger] = useState(false);

    useEffect(() => {
      const fetchCards = async () => {
        try {
          const response = await fetch (`${API_URL}`);
          const data = await response.json();
          setCards(data);
        }catch (error) {
          <div>Error: {error.message}</div>
        }
      }

      fetchCards();

    },[])

    const handleChangingSelectedCard = (id) => {
      setSelectedCard(cards[id]);
    }

  return (
    <div className="App">
      {Object.values(cards).map((card, index) =>
      <CardList 
        card = {card}
        key = {index}
        id = {index}
        onCardSelection = {handleChangingSelectedCard}
        />
      )}
    </div>
  )
}

export default App