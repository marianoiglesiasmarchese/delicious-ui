import React from 'react';
import PaginatedSwiper from './components/swiper/PaginatedSwiper';

import "react-id-swiper/lib/styles/css/swiper.css";

class Body extends React.Component{
    render() {
        return (
            <>
            {/** <button onClick={this.props.addRecipe}/> */}  
            <PaginatedSwiper recipes={this.props.recipes}/>  
            </>
        )
    }
}

export default Body;