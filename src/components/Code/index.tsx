import Prism from "prismjs";
import React, { useEffect, useState } from "react";

export type ContainerProps = {
  code: string;
  isEditable: boolean;
};

type ComponentProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
} & Omit<ContainerProps, "code">;

const Component: React.FC<ComponentProps> = (props) => {
  const { text, setText, isEditable } = props;
  return (
    // <div className="line-numbers">
    <div>
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

export const Code: React.FC<ContainerProps> = ({ code, isEditable }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  const [text, setText] = useState(code);
  const props = {
    text,
    setText,
    isEditable,
  };
  return <Component {...props} />;
};
