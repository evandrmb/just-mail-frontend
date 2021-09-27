import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TextInputField from "./TextInputField";

describe("TextInputField", () => {
  test("renders a input", () => {
    render(<TextInputField />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("finds a label", () => {
    const labelText = "any";

    render(<TextInputField label={labelText} id="email_input_field" />);

    const label = screen.getByLabelText(labelText);

    expect(label).toBeInTheDocument();
  });

  test("finds a placeholder", () => {
    const labelText = "any";

    render(<TextInputField label={labelText} />);

    expect(screen.getByPlaceholderText(labelText)).toBeInTheDocument();
  });
});
