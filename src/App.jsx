import { useState } from "react";
import { Logo } from "./components/Header";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Header>
        <Logo />
      </Header>
      <Body />
    </div>
  );
}

export default App;
