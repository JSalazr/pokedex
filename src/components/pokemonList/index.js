import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import PokemonCard from "./components/pokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setPokemonList(response.data.results))
      .then((response) => setPrevious(response.previous))
      .then((response) => setNext(response.next))
      .catch((error) => console.log(error));
  });

  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container>
          {pokemonList.map((pokemon) => (
            <PokemonCard dataUrl={pokemon.url} />
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PokemonList;
