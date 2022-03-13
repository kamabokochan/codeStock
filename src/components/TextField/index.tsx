import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

export type ContainerProps = InputHTMLAttributes<HTMLInputElement>;

type ComponentProps = ContainerProps;

const Component: React.FC<ComponentProps> = (props) => {
  return <input type="text" placeholder={props.placeholder} />;
};

const Container = styled.div``;

export const TextField: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
