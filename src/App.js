import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./views/Home";
import PokeList from "./views/PokeList";
import PokeInfo from "./views/PokemonInfo"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/list/:searchParam" component={PokeList} />
        <Route path="/PokeInfo/:pokeDexId" component={PokeInfo} />
      </Switch>
    </Router>
  );
}
