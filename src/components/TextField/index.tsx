import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

export type ContainerProps = InputHTMLAttributes<HTMLInputElement>;

type ComponentProps = ContainerProps;

const TextInput = styled.input`
  font-size: 16px;
  border: none;
  padding: 8px;
`;

const Component: React.FC<ComponentProps> = (props) => {
  return <TextInput type="text" {...props} />;
};

export const TextField: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};

// https://material.io/components/text-fields
