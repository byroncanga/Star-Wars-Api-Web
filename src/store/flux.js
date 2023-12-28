const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      endpoint: "https://swapi.tech/api/",
      characters: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      getCharacters: async (endpoint, key) => {
        //llamamos a local storage
        const localData = localStorage.getItem(key);
        // validamos si existe el Characters dentro de localstorage
        if (localData) {
          setStore({ [key]: JSON.parse(localData) });
          return;
        }

        const url = getStore();
        const response = await fetch(url.endpoint + endpoint);
        const data = await response.json();
        const dataList = [];
        for (let item of data.results) {
          const dataResponse = await fetch(item.url);
          const dataResults = await dataResponse.json();
          dataList.push(dataResults);
        }

        setStore({ [key]: dataList });
        // guardamos en el local storage el arreglo charatcers de la linea 20
        localStorage.setItem(key, JSON.stringify(dataList));
      },
      //agregar a favoritos
      addToFavorites: (item, itemType) => {
        const store = getStore();
        const newFavorite = { item, itemType };

        // Evitar duplicados en favoritos
        const isAlreadyFavorite = store.favorites.some(
          (element) =>
          element.item.result._id === item.result._id && element.itemType === itemType
        );

        if (!isAlreadyFavorite) {
          setStore({ favorites: [...store.favorites, newFavorite] });
        }
      },
    },
  };
};
export default getState;
