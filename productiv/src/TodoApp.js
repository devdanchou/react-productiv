import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList, Toptodo }
 */

function TodoApp({ initialTodos }) {

  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    newTodo.id = uuid();
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos.map(todo => {
      return todo.id === updatedTodo.id ? updatedTodo : todo;
    }));

  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
      <h3 className="mb-3">Todos</h3>
        <div className="col-md-6">
          {todos.length === 0
            ?
            <span className="text-muted">You have no todos.</span>
            :
            <EditableTodoList todos={todos} update={update} remove={remove} />}
        </div>

        <div className="col-md-6">
          {todos.length === 0
            ? null
            : <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>}


          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;