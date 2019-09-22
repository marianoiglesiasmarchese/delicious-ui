import React from 'react';
// Importing external functions
// import { throwAlert } from '../../Utils';
import { withRouter } from 'react-router-dom';

class SwiperElement extends React.Component {

  // using references like this we can access to a internal component from a function.
  imageRef = React.createRef();

  callEvent(message){
    // do something
    // throwAlert(message); TODO => i don't understand why is it calling we the page is loaded 
  }

  clickMe = () => {
    const imageName = this.imageRef.current.key; 
    console.log(imageName);
    this.props.history.push(`/recipe/${this.props.recipe.id}`);
  }

  variable = () => {
    // here we have an instance property that have as value a arrow function, in this way "this" is binded so we can access to the component itself,
    // if we use a function like the first example, in Javascript each function have it own context that is not binded to the state of the component.
  };

  render() { 
    // this allows us to extract parts of the object recived througth props and to use them calling these attibutes 
    const { title, description, image } = this.props.recipe;
    return (
        <div onClick={this.clickMe}>
          {/** <div onClick={this.callEvent()}></div> => if we use the parentesis we are calling the method when the app starts, this behavior respons upper question */}
            
          <h4> {title} </h4>

          <img className="swiper-lazy" ref={this.imageRef} alt={title} data-src={image} width="1280" height="600" />          
          
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          
          <p> {description} </p>

        </div>
    );
  }
}

export default withRouter(SwiperElement);