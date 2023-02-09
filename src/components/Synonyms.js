const Synonyms = ({ meaning }) => {
    
    const synonyms = meaning.synonyms;

    if (synonyms.length === 0) {
        return;
    }
    return (
        <p className="synonym-antonym-text"><span className="synonym-antonym-title">Synonyms</span>{synonyms.join(", ")}</p>
    );
}

export default Synonyms;
