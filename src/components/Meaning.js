import Defenition from "./Definition";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "../styles/Meaning.css";

const Meaning = ({ meaning }) => {
    return(
        <article className="meaning">
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
            <Synonyms meaning={meaning} />
            <Antonyms meaning={meaning} />
        </article>
    );
}

export default Meaning;
