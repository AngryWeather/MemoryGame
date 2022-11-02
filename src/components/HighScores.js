import "../styles/HighScores.css";


function HighScores(props) {
    return (
        <div className="high-scores-container">
            <p>Score: {props.score}</p>
        </div>
    );
}

export default HighScores;