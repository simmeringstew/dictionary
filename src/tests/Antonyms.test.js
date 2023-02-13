import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Antonyms from "../components/Antonyms";

test("If there are antonyms they are displayed", () => {
    const meaning = {
        antonyms: ["test", "another test"]
    };
    render(<Antonyms meaning={meaning} />);
    const antonym = screen.getByTestId("antonym");
    expect(antonym.textContent).toBe("Antonymstest, another test");
});

test("If there are no antonyms nothing is displayed", () => {
    const meaning = {
        antonyms: []
    };
    render(<Antonyms meaning={meaning} />);
    const antonym = screen.queryByText("Antonym");
    expect(antonym).not.toBeInTheDocument();
});
