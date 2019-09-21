import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperElement from './SwiperElement';

class PaginatedSwiper extends React.Component {
  params = {
    lazy: true,
    clickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  render() { 
    return(
      <div style={{padding: '25px 50px 75px 100px'}} >
        <Swiper {...this.params}>
          {/** we should use props to send the values, even to make it dynamic */}
          <div>
          <SwiperElement imageName="image URL" numeroDeImagen={1} nueva={true} />  
          </div>
          <div>
          <SwiperElement/>  
          </div>
        </Swiper>
      </div>
    );
  }
}

export default PaginatedSwiper;