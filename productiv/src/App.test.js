import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    console.log("this is result...", result.queryByText)

    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it ("contains todo list", function () {
    const result = render(<App />);
    expect(result.queryByText("Todos")).toBeInTheDocument();
  });
});

