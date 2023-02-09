import Meaning from "./Meaning";
import "../styles/Data.css";

const Data = ({ data }) => {

    const playAudio = () => {
        new Audio(`${data[0].phonetics[1].audio}`).play();
    }

    if (data.length === 0) {
        return;
    }

    else if (data[0] === "error") {
        return(
            <div className="error">
                <h1>Oops...</h1>
                <p>Looks like there was an issue with your search...</p>
            </div>
        );
    }
    
    return(
        <div className="word-data">
            <div className="phonetics">
                <div className="phonetics-text">
                    <h1>{data[0].word}</h1>
                    <h2>{data[0].phonetics[1].text}</h2>
                </div>
                <button type="button" className="audio" onClick={playAudio}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                </button>
            </div>
            <div className="meanings">
                {data[0].meanings.map(meaning =>
                <Meaning key={meaning.partOfSpeech} meaning={meaning} />
                )}
            </div>
            <div className="source">
                <hr />
                <div className="source-link">
                    <span>Source</span>
                    <a href={data[0].sourceUrls[0]}>
                        {data[0].sourceUrls[0]}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Data;
