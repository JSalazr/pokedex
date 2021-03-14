import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import PokemonContext from "../../../../context/pokemonContext";
import Card from "../card";

const PokemonListItem = ({ dataUrl }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((response) => setPokemonData(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <Grid item xs={12} md={6} lg={4}>
      <PokemonContext.Provider value={pokemonData}>
        <Card />
      </PokemonContext.Provider>
    </Grid>
  );
};

export default PokemonListItem;
