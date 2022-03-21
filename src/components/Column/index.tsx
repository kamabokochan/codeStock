import React, { ReactElement } from "react";
import styled from "styled-components";

export type ContainerProps = {
  columns: number;
  children: ReactElement[];
};

type ComponentProps = {
  itemWidth: string;
} & Pick<ContainerProps, "children">;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: ${(p: Pick<ComponentProps, "itemWidth">) => {
    return p.itemWidth;
  }};
`;

const Component: React.FC<ComponentProps> = ({ children, itemWidth }) => {
  return (
    <Container>
      {children.map((component, key) => {
        return (
          <Item itemWidth={itemWidth} key={key}>
            {component}
          </Item>
        );
      })}
    </Container>
  );
};

export const Column: React.FC<ContainerProps> = (props) => {
  const { columns } = props;
  return <Component {...props} itemWidth={`${100 / columns}%`} />;
};
