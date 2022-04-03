import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";

import { Code, Card, TextField, Button, Column } from "~/components";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <Script src="libs/prism-live/src/prism-live.js?load=css,javascript"></Script>
      <Column columns={2}>
        {[1, 2, 3].map((value) => {
          return <Card key={value} />;
        })}
      </Column>
      <Code isEditable={isEditable} />
      <TextField placeholder="title" />
      <TextField placeholder="description" />
      <Button>save</Button>
      <Button>delete</Button>
    </>
  );
};

export default Home;
