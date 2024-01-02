import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/contextProvider";
import { Divider, Button } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";

const Details = () => {
  const { store, actions } = useContext(Context);
  const [homeworld, setHomeworld] = useState("");

  const params = useParams();

  const charactersFilters = store.characters.find(
    (peopple) => peopple.result.uid == params.id
  );

  const idPlanet = () => {
    const homeworld = charactersFilters.result.properties.homeworld;
    const parts = homeworld.split("/");
    const planetId = parts[parts.length - 1];
    setHomeworld(planetId);
  };
  useEffect(() => {
    idPlanet();
    Aos.init({duration: 2000});
  }, [params.id, homeworld]);

  const planetFilters = store.planets.find(
    (planet) => planet.result.uid == homeworld
  );

  const propiedad = charactersFilters.result.properties;

  return (
    <>
      <div className="bg-[url(https://wallpaperset.com/w/full/f/b/7/427163.jpg)] bg-cover bg-no-repeat">
        <section className="">
          <div className="max-w-6xl px-6 py-1 mx-auto">
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
              <div className="absolute w-full bg-blue-300/10 backdrop-blur-sm border-1 border-red-50/10 -z-10 md:h-96 rounded-2xl shadow-lg"></div>

              <div  className="w-full p-6 bg-slate-900  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <div data-aos="fade-right">
                  <img
                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-lg md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                    src={`https://starwars-visualguide.com/assets/img/characters/${charactersFilters.result.uid}.jpg`}
                    onError={(e) => {
                      e.target.src =
                        "https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png";
                    }}
                  />
                </div>
                <div className="mt-2 md:mx-6" data-aos="fade-left">
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      {propiedad.name}
                    </p>
                    <p className="text-blue-200 ">{propiedad.gender}</p>
                  </div>

                  <p className="mt-4 text-lg leading-relaxed text-white md:text-xl py-2">
                    {" "}
                    Character Information:
                  </p>
                  <Divider className="my-4" />
                  <div className="flex gap-4 ">
                    <div className="font-bold text-slate-400">
                      <p>Gender:</p>
                      <p>Birth:</p>
                      <p>Hair Color:</p>
                      <p>Eyes Color:</p>
                      <p>Skin Color</p>
                      <p>Height:</p>
                      <p>Mass</p>
                    </div>
                    <div className="">
                      <p>{propiedad.gender}</p>
                      <p>{propiedad.birth_year}</p>
                      <p>{propiedad.hair_color}</p>
                      <p>{propiedad.eye_color}</p>
                      <p>{propiedad.skin_color}</p>
                      <p>{propiedad.height} </p>
                      <p>{propiedad.mass}</p>
                    </div>
                  </div>
                  <Button
                    color="default"
                    variant="ghost"
                    aria-label="Like"
                    className="hover:bg-red-600 my-3"
                    onClick={() => {
                      actions.addToFavorites(charactersFilters, "character");
                    }}
                  ><i className="fa-regular fa-heart"></i>
                    Add Favorites
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </section>
        <footer className="w-full" data-aos="fade-up">
          <div className=" md:flex justify-center gap-6 mx-4">
            {planetFilters ? (
              <div className="my-12 md:flex ">
                <div className="w-full h-full md:h-[320px] overflow-hidden rounded-l-lg">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${planetFilters.result.uid}.jpg`}
                    onError={(e) => {
                      e.target.onerror = null; // Previene bucles infinitos
                      e.target.src =
                        "https://scx2.b-cdn.net/gfx/news/2015/whatsimporta.jpg";
                    }}
                    className="w-full h-full rounded-2 object-fit-cover img-fluid shadow-lg "
                  />
                </div>
                <div className="max-w-2xl px-8 py-4 bg-white rounded-r-lg shadow-md dark:bg-gray-900">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {propiedad.name} Planet
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                      {planetFilters.result.properties.name}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {`
                        The planet ${planetFilters.result.properties.name}, 
                        with a diameter of ${planetFilters.result.properties.diameter} 
                        kilometers, offers a spectacle of vastness and mystery. Its rotation period of ${planetFilters.result.properties.rotation_period} 
                        hours and orbital period of ${planetFilters.result.properties.orbital_period} 
                        days give it a unique rhythm in the cosmos. The gravity here is ${planetFilters.result.properties.gravity}, 
                        similar to that of many inhabited planets, which has allowed for a population of ${planetFilters.result.properties.population} 
                        inhabitants, despite its ${planetFilters.result.properties.arid} 
                        climate and ${planetFilters.result.properties.terrain} 
                        terrain. This environment has ${planetFilters.result.properties.surface_water}% 
                        surface water scattered in sporadic oases. ${planetFilters.result.properties.name}, 
                        a world of extremes, challenges its inhabitants with its harshness, while captivating them with its beauty.`}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              "Not found"
            )}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Details;
