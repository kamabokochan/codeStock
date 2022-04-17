import type { NextPage } from "next";
import Script from "next/script";
import { useState, useEffect } from "react";

import { Code, Card, TextField, Button, Column } from "~/components";
import { Code as CodeEntity } from "~/domain/entity";
import { CodeRepository } from "~/domain/repository";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [codeItems, setCodeItems] = useState<CodeEntity[]>([]);
  useEffect(() => {
    const initialize = async () => {
      const codeRepository = new CodeRepository();
      const allCodes = await codeRepository.fetchAllCodes();
      allCodes && setCodeItems(allCodes);
    };
    initialize();
  }, []);

  return (
    <>
      <Script src="libs/prism-live/src/prism-live.js?load=css,javascript"></Script>
      <Column columns={3} gap={16}>
        {codeItems.map((data, key) => {
          return <Card data={data} key={key} />;
        })}
      </Column>
      {/* <Code isEditable={isEditable} />
      <TextField placeholder="title" />
      <TextField placeholder="description" />
      <Button>save</Button>
      <Button>delete</Button> */}
    </>
  );
};

export default Home;
