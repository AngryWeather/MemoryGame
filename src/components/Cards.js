import { useState } from "react";
import Card from "./Card";
import "../styles/Cards.css";


function Cards(props) {
    const [cards, setCards] = useState(
        [
            'blue', 'red', 'green', 'cyan', 'yellow', 'magenta', 'black', 'gray',
        ],
    );

    return (
        <div className="cards-container">
            {cards.map(card => {
                return (
                    <Card background={card} text={card}></Card>
                );
            })}
        </div>
    );
}

export default Cards;