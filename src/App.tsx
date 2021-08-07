import React from "react";
import ButtonTest from "./test/ButtonTest";
import MenuTest from "./test/MenuTest";
import IconTest from "./test/IconTest";
import UploadTest from "./test/UploadTest";

const App: React.FC = () => {
  return (
    <div className="App" style={{paddingBottom: '30px'}}>
      Edit <code>src/App.tsx</code> and save to reload.
      <ButtonTest />
      <hr />
      <MenuTest />
      <IconTest />
      <UploadTest />
    </div>
  );
};

export default App;
