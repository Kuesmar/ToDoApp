import React from "react";
import Presentation from "./components/Presentation";
import Login from "./components/Login";

function App() {

  return (
    <div className="flex h-screen bg-[#1c2833]">
      <Presentation />
      <Login />
    </div>
  )
};

export default App;
