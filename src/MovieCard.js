import React, { Component } from 'react';
import './movie.css';
import StarRatingComponent from 'react-star-rating-component';



   const Card =({item})=>{
       
        return ( <div className='movieApp'>
        
        <div  className='movie-card'>
        <div className="movie-rating"> 
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={item.rating}
         
        /></div>
        <div className='movie-image' >
        <img src={item.src} style={{width:'100%',height:'223px' ,overflow:'hidden' }} />
        </div>
            <div className="movie-description">{item.description}</div>
        </div>
        
        
         

        </div>

         );
    }

 
export default Card ; 