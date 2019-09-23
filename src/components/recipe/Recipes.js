import React from "react";

import { List, ListItem } from "react-mdl";
import RecipeElement from "./RecipeElement";

import arraySampleRecipes from "../../data/ArraySampleRecipes";

class Recipes extends React.Component{

    state = {
        arrayRecipe: []
    }

    fetchRecipes = () => {
        // load data on state
    }

    componentDidMount() {
        this.setState({
          arrayRecipe: arraySampleRecipes
        });
      }

    render(){
        return (
            <div align="center" style={{ padding: "25px"}}>
                <h1> My recipes </h1>
                <List style={{width: '800px'}}>
                    {/** here we should use map to display all the recipes stored for an user... they should be paginated */}
                    {this.state.arrayRecipe.map(each => (
                        <ListItem key={each.id}>                                                
                            <RecipeElement imageWidth={250} imageHeight={150} recipe={each}/>
                        </ListItem>
                    ))}                    
                </List>
            </div>
        )
    }

}

export default Recipes;