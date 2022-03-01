import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import CardDetailPopup from './CardDetailPopup';

const App = () => {

    const API_URL = 'https://rws-cards-api.herokuapp.com/api/v1/cards/';
    //const [reqType, setReqType] =useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [popupTrigger, setPopupTrigger] = useState(false);
    const [cardPile,setCardPile] = useState([]);


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

    // const getDeck = () => {
    //   const deck = Object.values(cards.cards);
    //   return deck;
    // }

    // console.log(getDeck);

    // const handleClick = () => {
    //   if (selectedCard !=null){
    //     setPopupTrigger(true);
    //     setSelectedCard(null);
    //   }
    // }


    const handleChangingSelectedCard = (id) => {
      const selectedCard = cards.cards[id];
      setSelectedCard(selectedCard);
    }

    //console.log(cards)
    let currentlyVisibleState = null;
    if (selectedCard!=null){
      currentlyVisibleState=<CardDetailPopup card={selectedCard}/>
    }else {
      currentlyVisibleState =Object.values(cards).map((card, index) =>
      <CardList 
        card = {card}
        key = {index}
        id = {index}
        onCardSelection = {handleChangingSelectedCard}
        />
      )
    }
    


  return (
    <React.Fragment>
      <div className="App">
      {currentlyVisibleState}
      {/* {Object.values(cards).map((card, index) =>
      <CardList 
        card = {card}
        key = {index}
        id = {index}
        onCardSelection = {handleChangingSelectedCard}
        />
        )} */}
        {/* <CardDetailPopup popupTrigger = {popupTrigger} setPopupTrigger={setPopupTrigger}>
        <h3>My popup</h3>
        </CardDetailPopup> */}
    </div>
    </React.Fragment>
  )
}

export default App