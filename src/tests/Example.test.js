import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Example from "../components/Example";

test("If there is no example nothing is rendered", () => {
    const definition = {
        definition: "test definition"
    }
    render(<Example definition={definition} />);
    expect(screen.queryByTestId("example")).not.toBeInTheDocument();
});

test("If there is a definition it is rendered correctly", () => {
    const definition = {
        example: "example test"
    }
    render(<Example definition={definition} />);
    const example = screen.getByTestId("example");
    expect(example.textContent).toBe(`"example test"`);
});
