import Example from "./Example";

const Definition = ({ definition }) => {
    return(
        <li className="meaning-list-item">
            {definition.definition}
            <Example definition={definition} />
        </li>
    );
}

export default Definition;
