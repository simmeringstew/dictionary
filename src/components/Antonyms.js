const Antonyms = ({ meaning }) => {
    
    const antonyms = meaning.antonyms;

    if (antonyms.length === 0) {
        return;
    }
    return (
        <p className="synonym-antonym-text" data-testid="antonym"><span className="synonym-antonym-title">Antonyms</span>{antonyms.join(", ")}</p>
    );
}

export default Antonyms;
