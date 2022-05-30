import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Navbar from "./Navbar";

import { renderTestApp } from "../../helpers/renderTestApp";

describe("LINKS TESTS", () => {
    test("user link", async () => {
        render(renderTestApp(<Navbar />, { route: "/users" }));
        const usersLink = screen.getByTestId("users-link");
        userEvent.click(usersLink);
        expect(screen.getByTestId("users-page")).toBeInTheDocument();
    });

    test("about link", async () => {
        render(renderTestApp(<Navbar />, { route: "/about" }));
        const aboutLink = screen.getByTestId("about-link");
        userEvent.click(aboutLink);
        expect(screen.getByTestId("about-page")).toBeInTheDocument();
    });

    test("main link", async () => {
        render(renderTestApp(<Navbar />, { route: "/main" }));
        const mainLink = screen.getByTestId("main-link");
        userEvent.click(mainLink);
        expect(screen.getByTestId("main-page")).toBeInTheDocument();
    });
});
