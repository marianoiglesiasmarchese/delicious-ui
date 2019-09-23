import React from "react";

import { IconButton } from "react-mdl";
import StarRatings from "react-star-ratings";

class Recipe extends React.Component {
  
    state = {
    recipe: {},
    rating: 1
  };

  fetchRecipe = (id) => {
      // 1. request recipe to the servie
        console.log("load state from service");
      // 2. update state
      this.setState({
          recipe: {}
      });
  }

  onChangeRating = event => {
    console.log("number of stars: " + event);
  };

  componentDidMount() {
    // 1. obtain the id from the URL
    var id = 1;
    // 2. call the service to fetch the recipe
    this.fetchRecipe(id);
  }

  render() {
    return (
      <div align="center" >
        <div>
          <text style={{ fontsize: "25px", align: "left"}}> recipe name </text>
          <span>
            <StarRatings
              rating={this.state.rating}
              starRatedColor="yellow"
              changeRating={this.onChangeRating}
              numberOfStars={5}
              name="rating"
              starDimension="25px"
              starSpacing="5px"
              style={{ float: "right" }}
            />
          </span>
        </div>
        <div className="container">
          <IconButton
            className="top-left"
            
            name="star"
            color="white"
          />
          <img
            src="/images/1.jpg"
            width="1280" height="600"
            alt="Some Recipe"
          />
        </div>
        <div>
          <p>
            very long recipe description description description description
            description description description description description
            description
          </p>
          <br />
        </div>
      </div>
    );
  }
}

export default Recipe;
