import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "./Card";
import { useState, useEffect } from 'react';


const Home: NextPage = () => {
  const [cards, setCards] = useState<Card[]>([
    {id:"1","text":"A", "isFlipped":false, "isMatched":false},
    {id:"2","text":"A", "isFlipped":false, "isMatched":false},
    {id:"3","text":"B", "isFlipped":false, "isMatched":false},
    {id:"4","text":"B", "isFlipped":false, "isMatched":false}
    // {id:"5","text":"C", "isFrontVisible":false, "isMatched":false},
    // {id:"6","text":"C", "isFrontVisible":false, "isMatched":false},
    // {id:"7","text":"D", "isFrontVisible":false, "isMatched":false},
    // {id:"8","text":"D", "isFrontVisible":false, "isMatched":false},
    // {id:"9","text":"9", "isFrontVisible":false, "isMatched":false}
  ]);

  const [cardsFlipped, setCardsFlipped] = useState(0);

  useEffect(() => {
    if (cardsFlipped === 2) {
      setCardsFlipped(0);
    }
  }, [cards]);

  function handleClick (id:any) {
    const newCards = cards.map(card => {
      if (card.id === id) {
        card.isFlipped = !card.isFlipped;
      }

      setCardsFlipped(cardsFlipped + 1);

      return card
    });

    setCards(newCards);
  }

  return (
    <div className="container m-3">
      <div className="grid grid-cols-2 gap-4">
      {cards.map(card => <div onClick={() => handleClick(card.id)}><Card data={card}></Card></div>)}
      </div>
      <div>{cardsFlipped}</div>
    </div>
  );
};

export default Home;


