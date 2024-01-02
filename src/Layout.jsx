import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import ContextProvider, { Context } from "./store/contextProvider";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Details from "./views/Details.jsx";
import DetailsPlanets from "./views/DetailsPlanets.jsx";
import DetailsVehicles from "./views/DetailsVehicles.jsx";


const Layout = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />          
            <Route path="/details/:id" element={<Details />} />
            <Route path="/detailsplanets/:uid" element={<DetailsPlanets />} />
            <Route path="/detailsvehicles/:uid" element={<DetailsVehicles />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        <Footer />
        </BrowserRouter>
    </ContextProvider>
  )
};

export default Layout;
