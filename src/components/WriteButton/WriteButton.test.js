import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import WriteButton from "./WriteButton";

describe("WriteButton", () => {
  test("renders a button", () => {
    render(<WriteButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("execute onClick once", async () => {
    const onClickStub = jest.fn();

    render(<WriteButton onClick={onClickStub} />);

    const button = await screen.findByRole("button");

    fireEvent.click(button);
    expect(onClickStub).toBeCalledTimes(1);
  });

  test("find 'Write' label in button", () => {
    render(<WriteButton />);

    expect(screen.getByText("Write")).toBeInTheDocument();
  });

  test("find image", () => {
    render(<WriteButton />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("find add.svg as image src", () => {
    render(<WriteButton />);

    expect(screen.getByAltText("add").src).toBe("http://localhost/add.svg");
  });
});
