import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import App from "./App";

describe("USERS TEST", () => {
    test("test user link", async () => {
        // render(renderWithRouter(<App />));
        // const usersLink = screen.getByTestId("users-link");
        // userEvent.click(usersLink);
        // expect(screen.getByTestId("users-page")).toBeInTheDocument();
    });
    // test("test about link", async () => {
    //     render(renderWithRouter(<App />));
    //     const aboutLink = screen.getByTestId("about-link");
    //     userEvent.click(aboutLink);
    //     expect(screen.getByTestId("about-page")).toBeInTheDocument();
    // });
    // test("test main link", async () => {
    //     render(renderWithRouter(<App />, "/users"));
    //     const mainLink = screen.getByTestId("main-link");
    //     userEvent.click(mainLink);
    //     expect(screen.getByTestId("main-page")).toBeInTheDocument();
    // });
});
