import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import PokemonListItem from "./components/pokemonListItem";
import useStyles from "./styles";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = 21;

  const styles = useStyles();

  useEffect(() => {
    console.log("NO SE", currentPage);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${currentPage*pageSize}`
      )
      .then((response) => {console.log(response); setPokemonList(response.data.results)})
      .catch((error) => console.log(error));
  }, [currentPage]);

  const handlePagination = (e, newPage) => {
    setCurrentPage(newPage - 1);
  };

  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container spacing={2} className={styles.container}>
          {pokemonList.map((pokemon, key) => (
            <PokemonListItem dataUrl={pokemon.url} key={key} />
          ))}
        </Grid>
        <Pagination onChange={handlePagination} count={898 / pageSize} />
      </Paper>
    </Grid>
  );
};

export default PokemonList;
