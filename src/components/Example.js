const Example = ({ definition }) => {
    if (!definition.example) {
        return;
    }
    return (
        <p className="example" data-testid="example">"{definition.example}"</p>
    ); 
}

export default Example;
