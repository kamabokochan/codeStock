// (1) import層
import Prism from "prismjs";
import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// (2) Types層
export type ContainerProps = {
  isEditable: boolean;
};
type ComponentProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
} & ContainerProps;
// (3) DOM層
const Component: React.FC<ComponentProps> = (props) => {
  const { text, setText, isEditable } = props;
  return (
    <div className="line-numbers">
      {isEditable ? (
        <textarea
          name="content"
          className="prism-live lang-javascript"
          onChange={(e) => {
            return setText(e.target.value);
          }}
          value={text}
        ></textarea>
      ) : (
        <pre data-label="index.js">
          <code className="lang-javascript">{text}</code>
        </pre>
      )}
    </div>
  );
};
// (4) Style層
// const StyledComponent = styled(Component)`...`;
// (5) Container層
export const Code: React.FC<ContainerProps> = ({ isEditable }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  const [text, setText] = useState('const great = () => {console.log("Awesome");};');
  const props = {
    text,
    setText,
    isEditable,
  };
  return <Component {...props} />;
};
