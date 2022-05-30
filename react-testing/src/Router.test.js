import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { renderWithRedux } from "./helpers/renderWithRedux";

describe("Routers tests", () => {
    it("Router test", () => {
        render(
            renderWithRedux(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )
        );
        const mainLink = screen.getByTestId("main-link");
        const aboutLink = screen.getByTestId("about-link");
        userEvent.click(aboutLink);
        expect(screen.getByTestId("about-page")).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId("main-page")).toBeInTheDocument();
    });

    it("Error page test", () => {
        render(
            <MemoryRouter initialEntries={["/testroute"]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
    });
});
