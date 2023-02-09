const Example = ({ definition }) => {
    if (!definition.example) {
        return;
    }
    return (
        <p className="example">"{definition.example}"</p>
    ); 
}

export default Example;
