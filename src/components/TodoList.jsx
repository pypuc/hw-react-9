import React, { Component } from "react";
import { List, Item, Text, Button } from "./TodoList.styled";

class TodoList extends Component {
  render() {
    const { todos, onDelete, onToggle } = this.props;

    return (
      <List>
        {todos.map((todo) => {
          return (
            <Item key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />

              <Text completed={todo.completed}>{todo.text}</Text>

              <Button onClick={() => onDelete(todo.id)}>Видалити</Button>
            </Item>
          );
        })}
      </List>
    );
  }
}

export default TodoList;
