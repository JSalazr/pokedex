import React, { useContext } from "react";
import PokemonContext from "../../../../context/pokemonContext";

const Title = () => {
  const pokemonData = useContext(PokemonContext);

  return (
      <p>#{pokemonData.id} {pokemonData.name}</p>
  );
};

export default Title;