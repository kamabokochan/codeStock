import React, { useEffect, useState } from "react";
import styled from "styled-components";

export type ContainerProps = {
  // isEditable: boolean;
};

type ComponentProps = {
  //   text: string;
  //   setText: React.Dispatch<React.SetStateAction<string>>;
} & ContainerProps;

const Component: React.FC<ComponentProps> = (props) => {
  return (
    <Container>
      <Thumbnail />
      <TextSection>
        <Title>title</Title>
        <SecondaryText>secondary text</SecondaryText>
      </TextSection>
    </Container>
  );
};

const Container = styled.div`
  width: 320px;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
`;
const Thumbnail = styled.div`
  background-image: url("sample.png");
  background-size: contain;
  background-position: center;
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
`;
const TextSection = styled.div`
  padding: 8px;
`;
const Title = styled.h2``;
const SecondaryText = styled.p``;

export const Card: React.FC<ContainerProps> = (props) => {
  // const props = {
  //   text,
  //   setText,
  //   isEditable,
  // };
  return <Component {...props} />;
};
