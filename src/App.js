import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
