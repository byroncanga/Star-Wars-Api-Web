import React from "react";
import Characters from "../components/Characters"
import Planets from "../components/Planets"
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import Vehicles from "../components/Vehicles";
import BannerVideo from "../components/BannerVideo";


const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <h4 className="p-6 ml-4">People</h4>
        <Characters />
      </div>
      <div className="container mx-auto py-6">
        <Banner/>
      </div>
      <div className="container mx-auto py-6">
        <h4 className="ml-9 mb-6">PLanets</h4>
        <Planets />
      </div>
      <div>
       <BannerVideo />
      </div>
      <div className="container mx-auto py-6">
        <h4 className="ml-9 mb-6">Vehicles</h4>
        <Vehicles />
      </div>
    </div>
  );
};

export default Home