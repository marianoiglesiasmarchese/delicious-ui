import React from "react";

class RecipeElement extends React.Component{
    render(){
        return (
            <>
            <button> start shape </button>
            <img src="some_recipe.jpg" alt="Some Recipe"/>
            <label> name </label>
            {/** Five stars component */}
            <p> description </p>
            <a href="#"> social network link </a>
            </>
        )
    }

}

export default RecipeElement;