import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField", () => {
  test("renders a input", () => {
    render(<InputField />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("finds a label", () => {
    const labelText = "any";

    render(<InputField label={labelText} id="email_input_field" />);

    const label = screen.getByLabelText(labelText);

    expect(label).toBeInTheDocument();
  });

  test("finds a placeholder", () => {
    const labelText = "any";

    render(<InputField label={labelText} />);

    expect(screen.getByPlaceholderText(labelText)).toBeInTheDocument();
  });
});
