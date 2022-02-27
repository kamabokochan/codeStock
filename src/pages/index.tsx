import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";

import { Code } from "~/components/Code";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <Script src="libs/prism-live/src/prism-live.js?load=css,javascript"></Script>
      <Code isEditable={isEditable} />
    </>
  );
};

export default Home;
