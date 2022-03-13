import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";

import { Code, Card } from "~/components";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <Script src="libs/prism-live/src/prism-live.js?load=css,javascript"></Script>
      <Code isEditable={isEditable} />
      <div>
        {[1, 2, 3].map((value) => {
          return <Card key={value} />;
        })}
      </div>
    </>
  );
};

export default Home;
