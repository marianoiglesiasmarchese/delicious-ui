import React from "react";
import RecipeElement from "./RecipeElement";

class Recipes extends React.Component{
    render(){
        return (
            <>
            <h1> My recipes </h1>
            <RecipeElement/>
            </>
        )
    }

}

export default Recipes;