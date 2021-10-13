import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import "./css/index.css";
import MovieDetails from "./components/movieDetails/MovieDetails";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
