import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

const todo = {
  id: 1,
  title: 'code',
  description: "write some code",
  priority: 2,
}


describe("todo description", function() {

  test("rendering without crashing", function() {
    render(<Todo todo={todo}/>);
  });

  test("contain classname", function() {
    const { container } = render(<Todo todo={todo}/>);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
  });

});