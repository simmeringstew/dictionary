import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Definition from "../components/Definition";

test("Definition is correctly rendered", () => {
    const definition = {
        definition: "test definition"
    }
    render(<Definition definition={definition} />);
    const item = screen.getByRole("listitem");
    expect(item.textContent).toBe("test definition");
});
