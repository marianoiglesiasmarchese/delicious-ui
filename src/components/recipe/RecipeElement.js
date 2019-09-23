import React from "react";
import { Link } from "react-router-dom";

import { IconButton } from "react-mdl";
import StarRatings from 'react-star-ratings';

class RecipeElement extends React.Component{

    state = {
        rating: 1
    };

    componentDidMount(){
        this.setState({
            rating: this.props.recipe.stars
        })
    }

    render(){
        return (
            <>          
            <span className="container">
                <IconButton className="top-left" style={{float: "left"}} name="star" color="white" />            
                <img src={this.props.recipe.image} width={this.props.imageWidth} height={this.props.imageHeight}  alt={this.props.recipe.name}/>            
            </span>
            <span>                               

                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name='rating'
                    starDimension="25px"
                    starSpacing="5px"
                />
                <span>
                    <h3> {this.props.recipe.name} </h3 >
                </span>     
                
                <div>
                    <p> 
                        {this.props.recipe.description}
                    </p>
                    <br/>
                    <Link style={{float: "right"}} to={`/recipe/${this.props.recipe.id}`}> social network link </Link>
                </div>                
            </span>  
            
            </>
        )
    }

}

export default RecipeElement;