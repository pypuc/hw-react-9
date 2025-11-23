import React, { Component } from "react";
import { Form, Input, Button } from "./TodoEditor.styled";

class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.textValue.trim() === "") {
      return;
    }

    this.props.onSubmit(this.state.textValue);
    this.setState({ textValue: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
          placeholder="Нове завдання"
        />

        <Button type="submit">Додати</Button>
      </Form>
    );
  }
}

export default TodoEditor;
