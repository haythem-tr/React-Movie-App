import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
 
class Star extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick=(nextValue)=> {
    this.setState({rating: nextValue});
    this.props.searchRate(nextValue)
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div className='star'>
        
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}

export default Star ;