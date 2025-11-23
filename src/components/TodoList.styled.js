import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  text-decoration: ${(props) =>
    props.completed ? "line-through" : "none"};
`;

export const Button = styled.button`
  margin-left: auto;
  background: crimson;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
`;
