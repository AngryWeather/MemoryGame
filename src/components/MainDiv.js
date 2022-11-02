import Cards from "./Cards";
import HighScores from "./HighScores";
import "../styles/MainDiv.css";
import { useState } from "react";
import { useEffect } from "react";

function MainDiv(props) {
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
        <main>
            <Cards
                cards={cards}
                resetCards={resetCards}
                isUsed={isUsed}
                addCardToUsedCards={addCardToUsedCards} 
                shuffleCards={shuffleCards}
            >
            </Cards>
            <HighScores></HighScores>
        </main>
    );
}

export default MainDiv;