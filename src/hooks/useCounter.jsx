import React from "react";

const useCounter = () => {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return { counter, increment, decrement };
};

export default useCounter;
