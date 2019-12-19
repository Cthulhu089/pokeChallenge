import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { getPokemonList, clearPokemonInfo } from "../actions/actions";
import { connect } from "react-redux";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import isEmpty from "lodash/isEmpty";
const PokeList = props => {
  const { getPokeList, match, pokeReducer, history, clearPokeInfo } = props;
  const [abc, setAbc] = useState("");

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  }));

  const pokeList = async () => {
    try {
      await clearPokeInfo()
      await getPokeList();
    } catch (error) {}
  };

  useEffect(() => {
    pokeList();
  }, []);

  return (
    <div className={useStyles.root}>
      <GridList cellHeight={500} className={useStyles.gridList}>
        {isEmpty(pokeReducer) === false &&
          pokeReducer.map(pokemon => (
            <GridListTile
              onClick={() => {
                history.push(`/PokeInfo/${pokemon.id}`);
              }}
              key={pokemon.nationalPokedexNumber}
            >
              <img src={pokemon.imageUrl} alt={pokemon.name} />
              <GridListTileBar
                title={pokemon.name}
                subtitle={<span>by: {pokemon.artist}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${pokemon.series}`}
                    className={useStyles.icon}
                  ></IconButton>
                }
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getPokeList: type => dispatch(getPokemonList(type)),
  clearPokeInfo: () =>  dispatch(clearPokemonInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
