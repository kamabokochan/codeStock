import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export type ContainerProps = { text: string } & ButtonHTMLAttributes<HTMLInputElement>;

type ComponentProps = ContainerProps;

const Component: React.FC<ComponentProps> = (props) => {
  return <ButtonStyle>{props.text}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  font-size: 16px;
  padding: 4px 8px;
  border: none;
  background: pink;
  color: white;
  border-radius: 3px;
`;

export const Button: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
