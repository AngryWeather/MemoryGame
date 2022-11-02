import "../styles/Card.css";
import { useEffect } from "react";


function Card(props) {
    const addCardAndShuffle = () => {
        props.addCardToUsedCards(props.text);
        props.shuffleCards();
    }


    return (
        <div onClick={addCardAndShuffle} className="card">
            <div style={props.style} className={"color"}></div>
            <p>{props.text}</p>
        </div>
    );
}

export default Card;