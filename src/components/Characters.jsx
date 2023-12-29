import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/contextProvider";
import Slider from "react-slick";
import { HeartIcon } from "./HeartIcon";
import { Spinner } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
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

const Characters = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const notify = () => {
    toast.success('Successfully Added!', {
      position: "bottom-center",
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
        {store.characters.length > 0 ? (
          store.characters.map((item) => {
            return (
              <div key={item.result.uid} className="flex">
                <div className="max-w-[900px] gap-2 grid grid-cols-12 px-8">
                  <Card
                    isFooterBlurred
                    className=" h-[400px] col-span-12  w-full"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                      <p className="text-tiny text-white/60 uppercase font-bold">
                        {item.result.properties.gender}
                      </p>
                      <h4 className="text-white/90 font-medium text-xl">
                        {item.result.properties.name}
                      </h4>
                    </CardHeader>
                    <Image
                      removeWrapper
                      alt="Relaxing app background"
                      className="z-0 w-full h-full object-cover"
                      src={`https://starwars-visualguide.com/assets/img/characters/${item.result.uid}.jpg`}
                      onError={(e) => {
                        e.target.src =
                          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh_400x400.jpg";
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
                            actions.addToFavorites(item, "character");notify();
                            }
                          }
                        >
                          <HeartIcon />
                        </Button>
                        <div className="flex flex-col">
                          <p className="text-tiny text-white/60">
                            {item.result.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        radius="full"
                        size="sm"
                        onClick={() => navigate(`/details/${item.result.uid}`)}
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
      <ToastContainer />
    </>
  );
};

export default Characters;
