import "../styles/Card.css";


function Card(props) {
    return (
        <div className="card">
            <div id={props.background} className="color"></div>
            <p>{props.text}</p>
        </div>
    );
}

export default Card;