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

    // useEffect(() => {
    //     console.log(cards.length);
    // })

    const shuffleCards = () => {
        setCards(cards => [...cards], cards.sort(() => Math.random() - 0.5));
    }


    return (
        <div className="cards-container">
            {cards.map(card => {
                return (
                    <Card shuffleCards={shuffleCards} style={{backgroundColor: `${card}`}} text={card}></Card>
                );
            })}
        </div>
    );
}

export default Cards;