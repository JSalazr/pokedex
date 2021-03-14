import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import PokemonContext from "../../../../context/pokemonContext";

const Card = () => {
  const pokemonData = useContext(PokemonContext);

  console.log(pokemonData)

  return (
    <Paper>
      <p>{pokemonData.name}</p>
    </Paper>
  );
};

export default Card;
