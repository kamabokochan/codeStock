import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";

import { Code, Card, TextField, Button, Column } from "~/components";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const sampleData = [
    {
      code: `
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if(fileName) {
    filePaths.push(filePath);
  }
}

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
      `,
      title: "title",
      secondaryText: "secondaryText",
    },
    {
      code: 'const great = () => {console.log("Awesome");};',
      title: "long title long title long title long title long title long title long",
      secondaryText:
        "long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText long secondaryText",
    },
    {
      code: 'const great = () => {console.log("Awesome");};',
      title: "たいとる　たいとる　たいとる　たいとる　たいとる　たいとる　たいとる　たいとる　たいとる",
      secondaryText:
        "せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと　せかんだりー　てきすと",
    },
    {
      code: 'const great = () => {console.log("Awesome");};',
      title: "title",
      secondaryText: "secondaryText",
    },
    {
      code: 'const great = () => {console.log("Awesome");};',
      title: "title",
      secondaryText: "secondaryText",
    },
  ];
  return (
    <>
      <Script src="libs/prism-live/src/prism-live.js?load=css,javascript"></Script>
      <Column columns={3} gap={16}>
        {sampleData.map((data, key) => {
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
