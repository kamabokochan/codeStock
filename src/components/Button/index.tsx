import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export type ContainerProps = { children: string } & ComponentPropsWithoutRef<"button">;
// learn more: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring

type ComponentProps = ContainerProps;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 4px 8px;
  border: none;
  background: pink;
  color: white;
  border-radius: 3px;
`;

const Component: React.FC<ComponentProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export const Button: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
