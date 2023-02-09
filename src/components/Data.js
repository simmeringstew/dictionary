const Data = ({ data }) => {
    if (data[0] === "error") {
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
            
        </div>
    );
}

export default Data;
