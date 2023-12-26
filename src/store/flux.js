const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        counter: 0,
      },
      actions: {
        decrement: () => {
          const store = getStore();
          setStore({ counter: store.counter - 1 });
        },
        increment: () => {
          const store = getStore();
          setStore({ counter: store.counter + 1 });
        }
      },
    };
  };
  
  export default getState;