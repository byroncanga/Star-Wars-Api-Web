import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/contextProvider";
const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/hooks">Custom Hooks</Link>
        </li>
      </ul>
      <div>
        <h1>Contador</h1>
        <div className="flex flex-center">
          <button onClick={actions.decrement}>Decrementar</button>
          <p>Contador: {store.counter}</p>
          <button onClick={actions.increment}>Incrementar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
