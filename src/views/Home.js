import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../App.css";
import { getPokemonList } from "../actions/actions";
import { connect } from "react-redux";

const Home = (props) => {
   const { history } = props;
    return (
      <div align="center" style={{ paddingTop: "20px" }}>
        <Button
          onClick={() => {
            history.push(`list/cards/`);
          }}
          variant="contained"
          size="large"
          color="primary"
        >
          Get Pokemons!!
        </Button>
      </div>
    );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getPokemonList: type => dispatch(getPokemonList(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
