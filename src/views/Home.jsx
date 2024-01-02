import React, { useEffect } from "react";
import Characters from "../components/Characters"
import Planets from "../components/Planets"
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import Vehicles from "../components/Vehicles";
import BannerVideo from "../components/BannerVideo";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000,  easing: 'ease-in-sine'});
  },[])
  return (
    <div  className="min-h-screen bg-gradient-to-r from-gray-900/20 via-gray-900/70" >
      <Hero />
      <div className="container mx-auto" data-aos="fade-down">
        <h4 className="p-6 ml-4">People</h4>
        <Characters />
      </div>
      <div className="container mx-auto py-10" data-aos="fade-down" >
        <Banner/>
      </div>
      <div className="container mx-auto py-10" data-aos="fade-down" >
        <h4 className="ml-9 mb-6">PLanets</h4>
        <Planets />
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
       <BannerVideo />
      </div>
      <div className="container mx-auto py-10" data-aos="fade-down">
        <h4 className="ml-9 mb-6">Vehicles</h4>
        <Vehicles />
      </div>
    </div>
  );
};

export default Home