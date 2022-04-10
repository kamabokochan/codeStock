import React from "react";
import styled from "styled-components";

import { Code } from "~/components";

export type ContainerProps = {
  data: {
    code: string;
    title: string;
    secondaryText: string;
  };
};

type ComponentProps = ContainerProps;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
`;
const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
    background: #2d2d2d;
  }
`;
const ThumbnailInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const TextSection = styled.div`
  padding: 8px;
`;
const Title = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const SecondaryText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
// TODO: ellipsize & numberOfLinesを関数化するかも

const Component: React.FC<ComponentProps> = ({ data }) => {
  const { code, title, secondaryText } = data;
  return (
    <Container>
      <Thumbnail>
        <ThumbnailInner>
          <Code code={code} isEditable={false} />
        </ThumbnailInner>
      </Thumbnail>
      <TextSection>
        <Title>{title}</Title>
        <SecondaryText>{secondaryText}</SecondaryText>
      </TextSection>
    </Container>
  );
};

export const Card: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
