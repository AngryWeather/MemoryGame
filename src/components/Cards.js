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
            <Card></Card>
        </div>
    );
}

export default Cards;