import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export type ContainerProps = { children: string } & ButtonHTMLAttributes<HTMLButtonElement>;

type ComponentProps = ContainerProps;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 4px 8px;
  border: none;
  background: pink;
  color: white;
  border-radius: 3px;
`;

const Component: React.FC<ComponentProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const Button: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
