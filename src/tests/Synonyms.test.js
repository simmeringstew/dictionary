import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Synonyms from "../components/Synonyms";

test("If there are antonyms they are displayed", () => {
    const meaning = {
        synonyms: ["test", "another test"]
    };
    render(<Synonyms meaning={meaning} />);
    const synonym = screen.getByTestId("synonym");
    expect(synonym.textContent).toBe("Synonymstest, another test");
});

test("If there are no antonyms nothing is displayed", () => {
    const meaning = {
        synonyms: []
    };
    render(<Synonyms meaning={meaning} />);
    const synonym = screen.queryByText("Synonyms");
    expect(synonym).not.toBeInTheDocument();
});
