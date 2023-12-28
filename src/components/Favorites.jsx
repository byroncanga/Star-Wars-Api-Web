import React, { useContext } from "react";
import { Context } from "../store/contextProvider"; 

const Favorites = () => {
  const { store } = useContext(Context);
  return (
    <div>
      <ul>
        {store.favorites.map((favorite) =>{
            return (
              <div key={favorite.item. result._id}>
            <li>
              <div className="flex justify-between">
                <div>
                  <p>Name: {favorite.item.result.properties.name}</p>                  
                </div>
                <div>
                    <button className="bg-red-500 p-2 rounded-md" > x</button>
                </div>
              </div>
            </li>
          </div>
          )
        } 
        )}
      </ul>
    </div>
  );
};

export default Favorites;
