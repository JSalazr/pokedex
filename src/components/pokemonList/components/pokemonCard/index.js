import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const Pokemon = ({ dataUrl }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((response) => setPokemonData(response))
      .catch((error) => console.log(error));
  });
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper>
        <p>{pokemonData.name}</p>
      </Paper>
    </Grid>
  );
};

export default Pokemon;
