import Cards from "./Cards";
import HighScores from "./HighScores";
import "../styles/MainDiv.css";

function MainDiv(props) {
    return (
        <main>
            <Cards></Cards>
            <HighScores></HighScores>
        </main>
    );
}

export default MainDiv;