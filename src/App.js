import React from "react";
import Message from "./components/MessageComponent/Message";
import "./App.css";

const App = () => {
  const text = "Test";
  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
};

export default App;
