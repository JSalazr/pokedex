import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import PokemonListItem from "./components/pokemonListItem";
import useStyles from "./styles";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const styles = useStyles();

  useEffect(() => {
    if (pokemonList.length === 0) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => setPokemonList(response.data.results))
        .catch((error) => console.log(error));
    }
  });

  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container spacing={2} className={styles.container}>
          {pokemonList.map((pokemon, key) => (
            <PokemonListItem dataUrl={pokemon.url} key={key} />
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PokemonList;
