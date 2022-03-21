import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

export type ContainerProps = InputHTMLAttributes<HTMLInputElement>;

type ComponentProps = ContainerProps;

const Component: React.FC<ComponentProps> = (props) => {
  return <TextInput type="text" placeholder={props.placeholder} />;
};

const TextInput = styled.input`
  font-size: 16px;
  border: none;
  padding: 8px;
`;

export const TextField: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};

// https://material.io/components/text-fields
