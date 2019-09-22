import React from 'react';
import '../css/App.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import objectSampleRecipes from "../data/ObjectSampleRecipes"
import arraySampleRecipes from "../data/ArraySampleRecipes"

class App extends React.Component {

  state = {
    objectRecipe: {},
    arrayRecipe: []
  };

  // update the state with all the recipes
  addRecipe = (recipe) => {
    console.log("received!:" + recipe);
    // 1. take a copy of the existing state
    const recipeState = {...this.state.objectRecipe};
    // 2. do whatever you want
    recipeState[`recipe${Date.now()}`] = recipe;
    // 3. set the piece of state that you need
    this.setState({
      objectRecipe: recipeState
    });
    
  };

  // from a lifecircle method we have access to the entire component, so we can edit the state 
  componentDidMount() {
    this.setState({
      objectRecipe: objectSampleRecipes,
      arrayRecipe: arraySampleRecipes
    });
  }

  render(){
    return (
      <div className="App">
        <Header/>
        
        {/**
        <ul>
           {this.state.arrayRecipe.map(each => <p key={each.id} object={each}> {each.title} </p>)} 
           {Object.keys(this.state.objectRecipe).map(key => <p key={key} object={this.state.objectRecipe[key]}> {key} </p>)}  
        </ul> 
        */}

        <Body addRecipe={this.addRecipe} recipes={this.state.arrayRecipe}/>
        <Footer/>
      </div>
    );
  };
}

export default App;
