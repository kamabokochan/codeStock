import type { NextPage } from "next";
import Script from "next/script";
import { useState, useEffect } from "react";

import { Code, Card, TextField, Button, Column } from "~/components";
import { CodeRepository } from "~/domain/repository";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  useEffect(() => {
    const init = async () => {
      const codeRepository = new CodeRepository();
      const res = await codeRepository.fetchAllCodes();
      console.log(res);
    };
    init();
  }, []);

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
