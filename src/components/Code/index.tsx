import Prism from "prismjs";
import React, { useEffect, useState } from "react";
// import styled from "styled-components";

export type ContainerProps = {
  isEditable: boolean;
};

type ComponentProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
} & ContainerProps;

const Component: React.FC<ComponentProps> = (props) => {
  const { text, setText, isEditable } = props;
  return (
    <div className="line-numbers">
      {isEditable ? (
        <textarea
          name="content"
          className="prism-live lang-typescript"
          onChange={(e) => {
            return setText(e.target.value);
          }}
          value={text}
        ></textarea>
      ) : (
        <pre data-prismjs-copy="📎" data-prismjs-copy-error="😵" data-prismjs-copy-success="😋">
          <code className="lang-typescript">{text}</code>
        </pre>
      )}
    </div>
  );
};

// const StyledComponent = styled(Component)`...`;

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
