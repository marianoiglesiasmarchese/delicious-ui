import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import About from './About';
import CreateRecipe from './CreateRecipe';
import Profile from './Profile';
import Login from './Login';
import Recipes from './Recipes';

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/recipe/new" component={CreateRecipe} /> 
            <Route exact path="/recipe/:id" component={CreateRecipe} /> 
            <Route exact path="/recipes" component={Recipes} /> 
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/profile" component={Profile} />         
            <Route exact path="/about" component={About} /> 
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

);

export default Router;