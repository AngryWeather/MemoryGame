import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Cards.css";


function Cards(props) {


    return (
        <div className="cards-container">
            {props.cards.map(card => {

                return (
                    <Card
                        resetCards={props.resetCards}
                        isUsed={props.isUsed}
                        addCardToUsedCards={props.addCardToUsedCards} 
                        shuffleCards={props.shuffleCards} 
                        style={{backgroundColor: `${card}`}} 
                        text={card}>
                    </Card>
                );
            })}
        </div>
    );
}

export default Cards;