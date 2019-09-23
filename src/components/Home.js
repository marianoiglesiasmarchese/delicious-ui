import React from "react";
// import PropTypes from "prop-types";

import Swiper from "react-id-swiper";
import SwiperElement from "./swiper/SwiperElement";

import objectSampleRecipes from "../data/ObjectSampleRecipes";
import arraySampleRecipes from "../data/ArraySampleRecipes";

class Home extends React.Component {
  
  /**  For standar React component we can declare props validation as static
  static propTypes = {
    recipes: PropTypes.array.isRequired
  };
  */

  state = {
    objectRecipe: {},
    arrayRecipe: []
  };

  // update the state with all the recipes
  addRecipe = recipe => {
    console.log("received!:" + recipe);
    // 1. take a copy of the existing state
    const recipeState = { ...this.state.objectRecipe };
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

  params = {
    lazy: true,
    // be careful with autoplay functionality because it works in a loop
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  render() {
    return (
      <Swiper style={{ padding: "25px" }} {...this.params}>
        
        {/**
          <ul>
            {this.state.arrayRecipe.map(each => <p key={each.id} object={each}> {each.title} </p>)} 
            {Object.keys(this.state.objectRecipe).map(key => <p key={key} object={this.state.objectRecipe[key]}> {key} </p>)}  
          </ul> 
        */}

        {this.state.arrayRecipe.map(each => (
          <div key={each.id}>
            <SwiperElement recipe={each} />
          </div>
        ))}
      </Swiper>
    );
  }
}

/**
Implementation for stateless components
Body.propTypes = {
    recipes: PropTypes.array.isRequired
};
*/

export default Home;
