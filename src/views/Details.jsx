import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/contextProvider";
import {Divider} from "@nextui-org/react";

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
  }, [params.id, homeworld]);

  const planetFilters = store.planets.find(
    (planet) => planet.result.uid == homeworld
  );

  const propiedad = charactersFilters.result.properties;

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl font-medium text-blue-500 ">People</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Star Wars
          </h1>

          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full dark:bg-gray-800 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-800 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src={`https://starwars-visualguide.com/assets/img/characters/${charactersFilters.result.uid}.jpg`}
                  onError={(e) => {
                    e.target.src =
                      "https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png";
                  }}
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">
                  {propiedad.name}
                  </p>
                  <p className="text-blue-200 ">
                  {propiedad.gender}
                        </p>
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
                        <p>{propiedad.height}</p>
                        <p>{propiedad.mass}</p>
                      </div>
                    </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Details;
