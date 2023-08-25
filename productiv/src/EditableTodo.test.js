import React from "react";
import {render} from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const todo = {
  id: 1,
  title: 'code',
  description: "write some code",
  priority: 2,
}

describe("editable todo list", function() {
  test("renders without crashing", function() {
    render(<EditableTodo todo={todo} />);
  });

  test("contains corrrect fields", function() {
    const result = render(<EditableTodo todo={todo} />);

    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("write some code")).toBeInTheDocument();
    expect(result.queryByText("fluffy")).not.toBeInTheDocument();
  })


})