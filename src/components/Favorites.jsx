import React, { useContext } from "react";
import { Context } from "../store/contextProvider";
import { Button } from "@nextui-org/react";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  const removeFavorite = (element) => {
    actions.removeFavorite(element.item.result.uid);
  };

  return (
    <div>
      <ul>
        {store.favorites.map((favorite, index) => {
          return (
            <div key={favorite.item.result._id}>
              <li>
                <div className="flex justify-between py-2">
                  <div>
                    <p>Name: {favorite.item.result.properties.name}</p>
                  </div>
                  <div>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => {
                        removeFavorite(favorite);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
