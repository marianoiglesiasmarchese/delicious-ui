import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import CreateRecipe from "./components/recipe/CreateRecipe";
import Recipe from "./components/recipe/Recipe";
import Recipes from "./components/recipe/Recipes";
import Login from "./components/Login";
import Profile from "./components/Profile";
import About from "./components/About";
import NotFound from "./components/NotFound";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/recipe/new" component={CreateRecipe} />
    <Route exact path="/recipe/:id" component={Recipe} />
    <Route exact path="/recipes" component={Recipes} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
