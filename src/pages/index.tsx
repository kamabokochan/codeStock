import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";

import { Code, Card, TextField, Button, Column } from "~/components";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const sampleData = [
    {
      title: "title",
      secondaryText: "secondaryText",
    },
    {
      title: "long title long title long title long title long title long title long",
      secondaryText:
        "long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText",
    },
    {
      title: "たいとる　たいとる　たいとる　たいとる　たいとる　たいとる　たいとる　たいとる　たいとる",
      secondaryText:
        "せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと",
    },
    {
      title: "title",
      secondaryText: "secondaryText",
    },
    {
      title: "title",
      secondaryText: "secondaryText",
    },
    {
      title: "title",
      secondaryText: "secondaryText",
    },
  ];
  return (
    <>
      <Script src="libs/prism-live/src/prism-live.js?load=css,javascript"></Script>
      <Column columns={3}>
        {sampleData.map((data, key) => {
          return <Card data={data} key={key} />;
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
