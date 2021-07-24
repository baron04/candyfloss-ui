import React from "react";
import ButtonTest from "./test/ButtonTest";
import MenuTest from "./test/MenuTest";
import IconTest from "./test/IconTest";

const App: React.FC = () => {
  return (
    <div className="App">
      Edit <code>src/App.tsx</code> and save to reload.
      <ButtonTest />
      <hr />
      <MenuTest />
      <IconTest />
    </div>
  );
};

export default App;
