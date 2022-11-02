import "../styles/Card.css";


function Card(props) {

    // use function from Cards.js in order to add the card to the array of used cards
    const addCardAndShuffle = () => {
        // check if the card has already been used
        if (props.isUsed(props.text)) {
            props.resetCards();
        } else {
            props.addCardToUsedCards(props.text);
        }
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