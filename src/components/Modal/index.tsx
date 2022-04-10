import React, { ReactElement } from "react";
import styled from "styled-components";

export type ContainerProps = {
  open: boolean;
  children: ReactElement | ReactElement[];
};

type ComponentProps = ContainerProps;
// TODO z-indexの管理方法を検討
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: grey;
  opacity: 0.5;
`;

const Contents = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  margin: auto;
`;

const Component: React.FC<ComponentProps> = ({ children, ...props }) => {
  return props.open ? (
    <div>
      <Background />
      <Contents>{children}</Contents>
    </div>
  ) : (
    <></>
  );
};

export const Modal: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
