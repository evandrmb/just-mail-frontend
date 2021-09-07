import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import WriteButton from "./WriteButton";

describe("WriteButton", () => {
  test("Should be a button", () => {
    render(<WriteButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Should execute onClick", async () => {
    const onClickStub = jest.fn();

    render(<WriteButton onClick={onClickStub} />);

    const button = await screen.findByRole("button");

    fireEvent.click(button);
    expect(onClickStub).toBeCalledTimes(1);
  });

  test("Should find 'Write' label in button", () => {
    render(<WriteButton />);

    expect(screen.getByText("Write")).toBeInTheDocument();
  });

  test("Should find image", () => {
    render(<WriteButton />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Should find add.svg as image src", () => {
    render(<WriteButton />);

    expect(screen.getByAltText("add").src).toBe("http://localhost/add.svg");
  });
});
