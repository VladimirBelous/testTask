import React from "react";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Table from "./components/Table/Table";

const App = () => {
  return (
    <div className=" app container">
      <ControlPanel />
      <Table />
    </div>
  );
};

export default App;
