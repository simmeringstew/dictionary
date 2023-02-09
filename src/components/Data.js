import Meaning from "./Meaning";
import "../styles/Data.css";

const Data = ({ data }) => {

    const playAudio = () => {
        new Audio(`${data.phonetics[1].audio}`).play();
    }

    if (data === "error") {
        return(
            <p>Looks like there was an issue with your search...</p>
        );
    }
    else if (data.length === 0) {
        return(
            <div></div>
        );
    }
    return(
        <div className="word-data">
            <div className="phonetics">
                <div className="phonetics-text">
                    <h1>hello</h1>
                    <h2>{data.phonetics[1].text}</h2>
                </div>
                <button type="button" className="audio" onClick={playAudio}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                </button>
            </div>
            <div className="meanings">
                {data.meanings.map(meaning =>
                <Meaning key={meaning.partOfSpeech} meaning={meaning} />
                )}
            </div>
        </div>
    );
}

export default Data;
