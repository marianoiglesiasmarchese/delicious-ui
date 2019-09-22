import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import About from './components/About';
import CreateRecipe from './components/CreateRecipe';
import Profile from './components/Profile';
import Login from './components/Login';
import Recipes from './components/Recipes';

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