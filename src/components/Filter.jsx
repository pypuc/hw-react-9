import React, { Component } from "react";
import { Wrapper, Input } from "./Filter.styled";

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <Wrapper>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Фільтр"
        />
      </Wrapper>
    );
  }
}

export default Filter;
