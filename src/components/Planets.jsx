import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/contextProvider";
import Slider from "react-slick";
import { HeartIcon } from "./HeartIcon";
import { Spinner } from "@nextui-org/react";
import {  toast } from 'react-toastify';
import Aos from "aos"
import "aos/dist/aos.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Planets = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const notify = (name) => {
    toast.success(`Successfully Added!  ${name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {store.planets.length > 0 ? (
          store.planets.map((item) => {
            return (
              <div key={item.result.uid} className="flex" data-aos="zoom-out">
                <div className="max-w-[900px] gap-2 grid grid-cols-12 px-8">
                  <Card
                    isFooterBlurred
                    className=" h-[300px] col-span-12  w-full"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start" >
                      <p className="text-tiny text-white/60 uppercase font-bold">
                        {item.result.properties.gender}
                      </p>
                      <h4 className="text-white/90 font-medium text-xl">
                        {item.result.properties.name}
                      </h4>
                    </CardHeader>
                    <img
                     
                      alt="Imagen del planeta"
                      className="z-0 w-full  object-cover"
                      src={`https://starwars-visualguide.com/assets/img/planets/${item.result.uid}.jpg`}
                      onError={(e) => {
                        e.target.onerror = null; // Previene bucles infinitos
                        e.target.src =
                          "https://scx2.b-cdn.net/gfx/news/2015/whatsimporta.jpg";
                      }}
                    />

                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                      <div className="flex flex-grow gap-2 items-center">
                        <Button
                          isIconOnly
                          color="default"
                          variant="faded"
                          aria-label="Like"
                          className="hover:bg-red-600"
                          onClick={() =>{
                            actions.addToFavorites(item, "planets");notify(item.result.properties.name);
                          }
                          }
                        >
                          <HeartIcon />
                        </Button>
                        <div className="flex flex-col">
                          <p className="text-tiny text-white/60">
                            Population:
                          </p>
                          <p>
                            {item.result.properties.population}
                          </p>
                        </div>
                      </div>
                      <Button
                        radius="full"
                        size="sm"
                        onClick={() => navigate(`/detailsplanets/${item.result.uid}`)}
                      >
                        Detalles
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <Spinner label="Loading..." color="warning" />
          </div>
        )}
      </Slider>
    </>
  );
};

export default Planets;
