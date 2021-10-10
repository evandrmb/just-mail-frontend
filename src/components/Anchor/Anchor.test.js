import React from "react";
import { render, screen } from "@testing-library/react";
import Anchor from "./Anchor";

describe("Anchor", () => {
  test("renders a anchor", () => {
    render(<Anchor href="https://www.w3schools.com/" />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  test("finds right href", () => {
    const href = "https://www.w3schools.com/";

    render(<Anchor href={href} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", href);
  });
});
