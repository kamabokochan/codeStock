import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";

import { Code, Card, TextField, Button } from "~/components";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <Script src="libs/prism-live/src/prism-live.js?load=css,javascript"></Script>
      {[1, 2, 3].map((value) => {
        return <Card key={value} />;
      })}
      <Code isEditable={isEditable} />
      <TextField placeholder="title" />
      <TextField placeholder="description" />
      <Button text="save" />
      <Button text="deleat" />
    </>
  );
};

export default Home;
