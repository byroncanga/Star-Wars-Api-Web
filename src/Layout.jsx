import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import CustomHooks from "./views/CustomHooks";
import ContextProvider, { Context } from "./store/contextProvider";
const Layout = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<CustomHooks />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default Layout;
