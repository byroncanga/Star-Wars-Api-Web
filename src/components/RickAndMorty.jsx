import React from "react";
import useRickAndMorty from "../hooks/useRickAndMorty";
const RickAndMorty = () => {
  const { characters, loading, error } = useRickAndMorty();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return characters.map((character) => {
    return (
      <div key={character.id}>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
      </div>
    );
  });
};

export default RickAndMorty;
