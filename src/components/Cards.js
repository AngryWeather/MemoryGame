import { useState } from "react";
import "../styles/Cards.css";


function Cards(props) {
    const [cards, setCards] = useState(Array(10).fill(null));

    return (
        <div className="cards-container">
            
        </div>
    );
}

export default Cards;