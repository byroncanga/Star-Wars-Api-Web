import React from "react";
import { Link } from "react-router-dom";
import useCounter from "../hooks/useCounter";
import RickAndMorty from "../components/RickAndMorty";
const CustomHooks = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <div className="container">
      <Link to="/">Inicio</Link>
      <h1>Custom Hooks</h1>

      <p>
        Los custom hooks nos permiten aislar logica, informacion u operaciones
        de nuestros components
      </p>

      <h2>Counter</h2>
      <p>
        Este contador esta basado en un custom hook que encapsula la logica del
        contador a diferencia del contador de la pagina principal que usa el
        context. (src/hooks/useCounter.jsx)
      </p>
      <div className="flex flex-center">
        <button onClick={decrement}>Decrementar</button>
        <p>Contador: {counter}</p>
        <button onClick={increment}>Incrementar</button>
      </div>
      <hr />
      <h2>Rick and morty</h2>
      <p>
        En este componente(RickAndMorty.jsx) se utiliza un hook para aislar la
        logica del fetch y de los estados del componente como tal. Este hook
        retorna la lista de personajes, el estado de carga y el error en caso de
        que exista un error.
      </p>
      <p>
        Aunque este metodo es muy ideal para aislar la logica, si no utilizamos
        una herramienta de manejo de estados como redux o context, no podremos
        compartir la informacion con otros componentes que no sean hijos
        directos de este componente.
      </p>
      <p>
        Tambien es importante notar que cada vez que utilicemos este hook en un
        componente, estaremos haciendo un fetch a la api de rick and morty,
        guardando la informacion en un estado y retornando la informacion, por
        lo que si utilizamos este hook en 3 componentes diferentes, estaremos
        haciendo 3 fetch a la api.
      </p>
      <RickAndMorty />
    </div>
  );
};

export default CustomHooks;
