import React, { Component } from "react";
import { Box, Stat } from "./Info.styled";

class Info extends Component {
  render() {
    const { total, completed } = this.props;

    return (
      <Box>
        <Stat>Усього завдань: {total}</Stat>
        <Stat>Виконано: {completed}</Stat>
      </Box>
    );
  }
}

export default Info;
