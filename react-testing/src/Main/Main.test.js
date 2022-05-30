import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

describe("Tests Main componet", () => {
    it("render elements in component", () => {
        render(<Main />);

        const hello = screen.getByText(/hello/i);
        const btn = screen.getByRole("button");
        const input = screen.getByPlaceholderText(/input value/i);

        expect(hello).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    it("check that h1 is null with queryByText.", () => {
        const hello = screen.queryByText(/hello2/i);
        expect(hello).toBeNull();
    });

    it("usage practice findByText.", async () => {
        render(<Main />);
        const elem = await screen.findByText(/data/i);
        expect(elem).toBeInTheDocument();
        expect(elem).toHaveStyle({ color: "red" });
    });

    it("click events", () => {
        render(<Main />);
        const btn = screen.getByTestId("toggle-btn");

        expect(screen.queryByTestId("toggle-elem")).toBeNull();
        fireEvent.click(btn);
        expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId("toggle-elem")).toBeNull();
    });

    it("input events", () => {
        render(<Main />);
        const input = screen.getByPlaceholderText(/input value/i);

        expect(screen.queryByTestId("value-elem")).toContainHTML("");
        // fireEvent.input(input, {
        //     target: { value: "mock text" },
        // });
        userEvent.type(input, "mock text");
        expect(screen.queryByTestId("value-elem")).toContainHTML("mock text");
    });
});
