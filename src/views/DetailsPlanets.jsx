import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/contextProvider";
import { Button } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";

const DetailsPlanets = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const planetFilters = store.planets.find(
    (planet) => planet.result.uid === uid
  );

  return (
    <div className="bg-[url(https://wallpaperset.com/w/full/f/b/7/427163.jpg)] bg-cover bg-no-repeat">
      <section class="bg-white dark:bg-gray-900/10">
        <div class="relative flex">
          <div class="min-h-screen lg:w-1/3"></div>
          <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800/30 lg:block"></div>

          <div class="container flex flex-col justify-center w-full min-h-screen px-6 py-3 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-2xl font-semibold text-gray-800/30 capitalize lg:text-3xl dark:text-white">
              Star Wars <span class="text-slate-500">Planets</span> <br />
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center overflow-hidden" data-aos="fade-right">
              <img
                class="object-cover object-center w-full lg:h-full lg:w-[32rem] rounded-lg "
                src={`https://starwars-visualguide.com/assets/img/planets/${planetFilters.result.uid}.jpg`}
                onError={(e) => {
                  e.target.src =
                    "https://scx2.b-cdn.net/gfx/news/2015/whatsimporta.jpg";
                }}
                alt=""
              />

              <div class="mt-8 lg:px-10 lg:mt-0">
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72 text-justify">
                {planetFilters.result.properties.name}
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                      {`The planet ${planetFilters.result.properties.name}, 
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

                <h3 class="mt-6 text-lg font-medium text-blue-500">
                  Created
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                {planetFilters.result.properties.created}
                </p>
                <Button
                    color="default"
                    variant="ghost"
                    aria-label="Like"
                    className="hover:bg-red-600 my-3"
                    onClick={() => {
                      actions.addToFavorites(planetFilters, "planets");
                    }}
                  ><i className="fa-regular fa-heart"></i>
                    Add Favorites
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPlanets;
