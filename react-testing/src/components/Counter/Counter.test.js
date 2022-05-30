import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../helpers/renderTestApp";

describe("Counter test", () => {
    test("router test", async () => {
        render(
            renderTestApp(null, {
                route: "/",
                initialState: {
                    counter: { value: 10 },
                },
            })
        );

        const incrementBtn = screen.getByTestId("increment-btn");
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
        userEvent.click(incrementBtn);
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
});
