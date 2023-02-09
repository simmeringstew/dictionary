import "../styles/Meaning.css";

const Meaning = ({ meaning }) => {
    return(
        <div className="meaning">
            <div className="meaning-title">
                <h3>{meaning.partOfSpeech}</h3>
                <hr />
            </div>
        </div>
    );
}

export default Meaning;
