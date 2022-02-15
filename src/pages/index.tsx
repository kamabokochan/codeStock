import type { NextPage } from "next";
import Prism from "prismjs";
import { useEffect, useState } from "react";

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
      <div
        dangerouslySetInnerHTML={{
          __html: `<pre data-label="index.html"><code class="lang-javascript">${text}</code></pre>`,
        }}
      ></div>
    </>
  );
};

export default Home;
