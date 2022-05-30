import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import axios from "axios";
import { arrayUsers } from "./constant";
import { MemoryRouter } from "react-router-dom";

import { renderTestApp } from "../helpers/renderTestApp";

jest.mock("axios");

describe("Tests Users componet", () => {
    let response;
    beforeEach(() => {
        response = {
            data: arrayUsers,
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("async function", async () => {
        axios.get.mockReturnValue(response);
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        );

        const users = await screen.findAllByTestId("user-item");

        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    });

    test("redirect to UserDetailpage", async () => {
        axios.get.mockReturnValue(response);
        render(renderTestApp(<Users />));
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        userEvent.click(users[0]);
        expect(screen.getByTestId("user-page")).toBeInTheDocument();
    });
});
