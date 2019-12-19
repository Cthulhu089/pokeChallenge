import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { getPokemonInfo } from "../actions/actions";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";

const PokeInfo = props => {
  const { getPokemonInfo, match, pokeInfoReducer } = props;

  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });

  const getPokemon = async () => {
    try {
      await getPokemonInfo(match.params.pokeDexId);
    } catch (error) {}
  };

  useEffect(() => {
    getPokemon();
  }, []);

  console.log("pokeInfoReducer", pokeInfoReducer);
  const component =
    isEmpty(pokeInfoReducer) === false ? (
      <Card className={useStyles.card}>
        <CardActionArea>
          <img src={pokeInfoReducer.imageUrl} alt={pokeInfoReducer.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {pokeInfoReducer.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Attacks
            </Typography>
            {isNil(pokeInfoReducer.attacks) === false && pokeInfoReducer.attacks.map((item, index) => {
              return (
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.name}
                </Typography>
              );
            })}
            <Typography gutterBottom variant="h5" component="h2">
              Resistances
            </Typography>
            {isNil(pokeInfoReducer.resistances) === false && pokeInfoReducer.resistances.map((item, index) => {
              return (
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.type}
                </Typography>
              );
            })}
            <Typography gutterBottom variant="h5" component="h2">
              Weaknesses
            </Typography>
            {isNil(pokeInfoReducer.weaknesses) === false && pokeInfoReducer.weaknesses.map((item, index) => {
              return (
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.type}
                </Typography>
              );
            })}
          </CardContent>
        </CardActionArea>
      </Card>
    ) : (
      "Loading"
    );

    return component;
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getPokemonInfo: type => dispatch(getPokemonInfo(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeInfo);
