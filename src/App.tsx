import React, { FC } from "react";
import { CountersContainer } from "./components/countersContainer/CountersContainer";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <CountersContainer />
    </div>
  );
};

export default App;
