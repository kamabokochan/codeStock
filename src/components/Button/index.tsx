import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export type ContainerProps = { text: string } & ButtonHTMLAttributes<HTMLInputElement>;

type ComponentProps = ContainerProps;

const Component: React.FC<ComponentProps> = (props) => {
  return <button>{props.text}</button>;
};

const Container = styled.div``;

export const Button: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
