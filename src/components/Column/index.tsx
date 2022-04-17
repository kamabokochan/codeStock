import React, { ReactElement } from "react";
import styled from "styled-components";

type Gap = number;
type ItemWidth = number;

export type ContainerProps = {
  columns: number;
  children: ReactElement[];
  gap: Gap;
};

type ComponentProps = {
  itemWidth: ItemWidth;
} & Omit<ContainerProps, "columns">;

const Container = styled.div`
  width: ${({ gap }: { gap: Gap }) => {
    return `calc(100% + ${gap}px)`;
  }};
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ gap }: { gap: Gap }) => {
    return `-${gap}px`;
  }};
  margin-top: ${({ gap }: { gap: Gap }) => {
    return `-${gap}px`;
  }};
`;

const Item = styled.div`
  width: ${({ itemWidth, gap }: { itemWidth: ItemWidth; gap: Gap }) => {
    return `calc(${itemWidth}% - ${gap}px)`;
  }};
  margin-left: ${({ gap }: { gap: Gap }) => {
    return `${gap}px`;
  }};
  margin-top: ${({ gap }: { gap: Gap }) => {
    return `${gap}px`;
  }};
`;

const Component: React.FC<ComponentProps> = ({ children, itemWidth, gap }) => {
  return (
    <Container gap={gap}>
      {children.map((component, key) => {
        return (
          <Item {...{ itemWidth, gap }} key={key}>
            {component}
          </Item>
        );
      })}
    </Container>
  );
};

export const Column: React.FC<ContainerProps> = (props) => {
  const { columns } = props;
  return <Component {...props} itemWidth={100 / columns} />;
};
