import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import clsx from 'clsx';
import Title from "../title";
import PokemonContext from "../../../../context/pokemonContext";
import { typeStyles, useStyles } from "../../../common/styles";
import typeColors from "../../../../data/typeColors";

const Card = () => {
  const pokemonData = useContext(PokemonContext);

  const typeClasses = getTypesStyles(pokemonData.types)();
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.card, typeClasses.typeTemplate)}>
      <Title />
    </Paper>
  );
};

const getTypesStyles = (types) => {
  if(types === undefined){
    return typeStyles();
  }
  const primaryType = types[0].type.name;
  const secondaryType = types.length > 1 ? types[1].type.name : types[0].type.name;

  return typeStyles(typeColors[primaryType].light, typeColors[secondaryType].dark)
}

export default Card;
