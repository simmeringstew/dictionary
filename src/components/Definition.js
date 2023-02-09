import Example from "./Example";

const Definition = ({ definition }) => {
    return(
        <li>
            {definition.definition}
            <Example definition={definition} />
        </li>
    );
}

export default Definition;
