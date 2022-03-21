import React, { useEffect, useState } from "react";
import styled from "styled-components";

export type ContainerProps = {
  contents: {
    title: string;
    secondaryText: string;
  };
};

type ComponentProps = ContainerProps;

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

const Component: React.FC<ComponentProps> = (props) => {
  const { title, secondaryText } = props.contents;
  return (
    <Container>
      <Thumbnail />
      <TextSection>
        <Title>{title}</Title>
        <SecondaryText>{secondaryText}</SecondaryText>
      </TextSection>
    </Container>
  );
};

export const Card: React.FC = () => {
  const sampleData = {
    title: "title",
    secondaryText: "secondaryText",
  };
  return <Component contents={sampleData} />;
};
