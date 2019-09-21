import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperElement from './SwiperElement';

class PaginatedSwiper extends React.Component {
  params = {
    lazy: true,
    // be careful with autoplay functionality because it works in a loop
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  render() { 
    return(
      <div style={{padding: '25px'}} >        

        <Swiper {...this.params}>
    
          {this.props.recipes.map(each =>           
            <div>
              <SwiperElement key={each.id} recipe={each} />      
            </div>
          )}
      
        </Swiper>
      </div>
    );
  }
}

export default PaginatedSwiper;