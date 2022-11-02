import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Cards.css";


function Cards(props) {
    const [cards, setCards] = useState(
        [
            'blue', 'red', 'green', 'cyan', 'yellow', 'magenta', 'black', 'gray',
            'aliceblue', 'antiquewhite', 'silver', 'white', 'maroon', 'purple',
            'fuchsia', 'lime', 'olive', 'navy', 'teal', 'aqua', 'aquamarine',
            'azure', 'beige', 'cadetblue', 'chocolate', 'coral', 'cornflowerblue',
            'crimson', 'darkcyan', 'darkolivegreen', 'darkseagreen', 'dodgerblue',
            'firebrick', 'gold', 'greenyellow', 'indigo', 'khaki', 'lavender',
            'lightpink', 'lightsalmon', 'lightseagreen', 'orange', 'orangered',
            'pink', 'royalblue', 'salmon', 'steelblue', 'tomato', 'turquoise',
        ],
    );

    const [usedCards, setUsedCards] = useState([]);
    const [score, setScore] = useState(0);

    const addCardToUsedCards = (text) => {
        setUsedCards(usedCards => [...usedCards, text]);
        setScore(usedCards.length);
    }

    const resetCards = () => {
        setUsedCards([]);
    }

    const isUsed = text => {
        return usedCards.includes(text);
    }

 
    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        setCards(cards => [...cards], cards.sort(() => Math.random() - 0.5));
    }

    return (
        <div className="cards-container">
            {cards.map(card => {

                return (
                    <Card
                        resetCards={resetCards}
                        isUsed={isUsed}
                        addCardToUsedCards={addCardToUsedCards} 
                        shuffleCards={shuffleCards} 
                        style={{backgroundColor: `${card}`}} 
                        text={card}>
                    </Card>
                );
            })}
        </div>
    );
}

export default Cards;