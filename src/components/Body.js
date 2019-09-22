import React from 'react';
import PropTypes from "prop-types";
import PaginatedSwiper from './swiper/PaginatedSwiper';

import "react-id-swiper/lib/styles/css/swiper.css";

class Body extends React.Component{

    // For standar React component we can declare props validation as static 
    static propTypes = {
        recipes: PropTypes.array.isRequired,
        addRecipe: PropTypes.func
    }

    render() {
        return (
            <>
            {/** <button onClick={this.props.addRecipe}/> */}  
            <PaginatedSwiper recipes={this.props.recipes}/>  
            </>
        )
    }
}

{/**
Implementation for stateless components
Body.propTypes = {
    recipes: PropTypes.array.isRequired,
    addRecipe: PropTypes.func.isRequired
};
*/}

export default Body;