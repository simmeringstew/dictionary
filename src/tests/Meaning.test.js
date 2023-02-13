import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Meaning from "../components/Meaning";

test("Meaning data is correctly rendered", () => {
    const meaning = {
        "partOfSpeech":"noun",
        "definitions":[
            {
                "definition":"test",
                "synonyms":[],
                "antonyms":[]
            }
        ],
        "synonyms":[],
        "antonyms":[]
    };
    render(<Meaning meaning={meaning} />);
    const partOfSpeech = screen.getByRole("heading", { level: 3 });
    expect(partOfSpeech.textContent).toBe("noun");
});
