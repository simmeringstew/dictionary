import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Data from "../components/Data";

test("If there is no data nothing is rendered", () => {
    const data = [];
    render(<Data data={data} />);
    expect(screen.queryByRole("main")).not.toBeInTheDocument();
});

test("If there is an error the error message is displayed", () => {
    const data = ["error"];
    render(<Data data={data} />);
    const oops = screen.getByRole("heading", { level: 1 });
    expect(oops.textContent).toBe("Oops...");
});

test("With proper data the correct information is shown", () => {
    const data = [
        {
            word: "test",
            phonetics: [
                {
                    text: "phonetics"
                }
            ],
            sourceUrls: ["https://test.com/"],
            meanings: [
                {
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
                }
            ]
        }
    ];
    render(<Data data={data} />);
    const word = screen.getByRole("heading", { level: 1 });
    const phonetics = screen.getByRole("heading", { level: 2 });
    const link = screen.getByRole("link");
    expect(word.textContent).toBe("test");
    expect(phonetics.textContent).toBe("phonetics");
    expect(link.href).toBe("https://test.com/");
});
