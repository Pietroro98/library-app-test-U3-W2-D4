import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome Component", () => {
  it("should render the Welcome component correctly", () => {
    render(<Welcome />);

    const headingElement = screen.getByText(/Benvenuti in Library-App!/i);

    expect(headingElement).toBeInTheDocument();
  });
});
