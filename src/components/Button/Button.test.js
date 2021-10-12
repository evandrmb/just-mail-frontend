import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders a button", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("finds a label in button", () => {
    render(<Button>Mock</Button>);

    expect(screen.getByText("Mock")).toBeInTheDocument();
  });

  test("executes onClick once", async () => {
    const onClickStub = jest.fn();

    render(<Button onClick={onClickStub} />);

    const button = await screen.findByRole("button");

    fireEvent.click(button);
    expect(onClickStub).toBeCalledTimes(1);
  });
});
