import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";

test("Correct value is displayed in the search field", () => {
    const previousSearch = "test";
    render(<Search previousSearch={previousSearch} />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("test");
});

test("Clicking the submit button submits the form", () => {
    const previousSearch = "";
    const onClick = jest.fn();
    render(<Search previousSearch={previousSearch} changeSearch={onClick} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});

test("Pressing enter submits the form", () => {
    const previousSearch = "";
    const onSubmit = jest.fn();
    render(<Search previousSearch={previousSearch} changeSearch={onSubmit} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "{enter}")
    expect(onSubmit).toHaveBeenCalledTimes(1);
});

test("Clicking the submit button with stuff written in the input sends that input", () => {
    const previousSearch = "";
    const onClick = jest.fn();
    render(<Search previousSearch={previousSearch} changeSearch={onClick} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    userEvent.type(input, "test");
    userEvent.click(button);
    expect(onClick.mock.calls[0][0]).toBe("test");
});

test("Pressing enter with stuff written in the input sends that input", () => {
    const previousSearch = "";
    const onSubmit = jest.fn();
    render(<Search previousSearch={previousSearch} changeSearch={onSubmit} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test{enter}");
    expect(onSubmit.mock.calls[0][0]).toBe("test");
});
