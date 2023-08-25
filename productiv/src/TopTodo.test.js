import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo";

const todo1 = {
  id: 1,
  title: 'code',
  description: "write some code",
  priority: 3,
};
const todo2 = {
  id: 2,
  title: 'sleep',
  description: "sleep early",
  priority: 2,
};

const testTodos = [todo1, todo2];


describe("TopTodo", function () {

  test("rendering without crashing", function () {
    render(<TopTodo todos={testTodos} />);
  });

  test("works", function () {
    const result = render(<TopTodo todos={testTodos} />);
    expect(result.queryByText("write some code")).not.toBeInTheDocument();
    expect(result.queryByText("(priority: 2)")).toBeInTheDocument();

  });



});