import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import Info from "./components/Info";
import todosData from "./todo.json";

class App extends Component {
  state = {
    todos: todosData,
    filter: "",
  };

  addTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(36).slice(2),
      text,
      completed: false,
    };
    const updated = [newTodo];
    updated.push(...this.state.todos);

    this.setState({ todos: updated });
  };

  deleteTodo = (id) => {
    const updated = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({ todos: updated });
  };

  toggleCompleted = (id) => {
    const updated = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          completed: todo.completed === false,
        };
      }

      return todo;
    });

    this.setState({ todos: updated });
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;

    if (filter === "") {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.text.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { todos, filter } = this.state;

    const completedCount = todos.filter((t) => t.completed).length;

    return (
      <div>
        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.handleFilter} />

        <Info total={todos.length} completed={completedCount} />

        <TodoList
          todos={this.getFilteredTodos()}
          onDelete={this.deleteTodo}
          onToggle={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
