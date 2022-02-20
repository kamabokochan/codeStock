import type { NextPage } from "next";
import Prism from "prismjs";
import { useEffect, useState } from "react";
// import styled from "styled-components";

const Home: NextPage = () => {
  useEffect(() => {
    Prism.highlightAll();
  });
  const [text, setText] = useState('const great = () => {console.log("Awesome");};');
  return (
    <>
      <textarea
        name="content"
        onChange={(e) => {
          return setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <div className="line-numbers">
        <pre data-label="index.js">
          <code className="lang-javascript">{text}</code>
        </pre>
      </div>
    </>
  );
};

// const Title = styled.div`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export default Home;
