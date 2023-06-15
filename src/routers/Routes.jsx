import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "../pages/Page1";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </>
  );
}

export default Routers;