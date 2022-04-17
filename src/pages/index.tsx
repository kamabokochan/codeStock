import type { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";

import { Code, Card, TextField, Button, Column, Modal } from "~/components";

const Home: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [open, setOpen] = useState(false);
  // TODO 型付け
  const handleOpen = (e: any) => {
    e.preventDefault();
    return setOpen(true);
  };
  const handleClose = () => {
    return setOpen(false);
  };
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
          return (
            <a href="#" onClick={handleOpen} key={key}>
              <Card data={data} />
            </a>
          );
        })}
      </Column>
      <Modal open={open}>
        <Code code={sampleData[0].code} isEditable={isEditable} />
        <TextField placeholder="title" />
        <TextField placeholder="description" />
        <Button>save</Button>
        <Button>delete</Button>
        <button onClick={handleClose}>close modal</button>
      </Modal>
    </>
  );
};

export default Home;
