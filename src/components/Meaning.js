import Defenition from "./Definition";
import "../styles/Meaning.css";

const Meaning = ({ meaning }) => {
    return(
        <div className="meaning">
            <div className="meaning-title">
                <h3>{meaning.partOfSpeech}</h3>
                <hr />
            </div>
            <h4>Meaning</h4>
            <ul className="meaning-list">
                {meaning.definitions.map(definition =>
                <Defenition key={definition.definition} definition={definition} />
                )}
            </ul>
        </div>
    );
}

export default Meaning;
