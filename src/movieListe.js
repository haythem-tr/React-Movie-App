import React, {Component } from 'react';
import Card from './MovieCard.js';


import './movie.css'


const MovieList =({tableau = [], onAddMovie = () => {}})=>{

    return(<div className='liste' >

    {tableau.map((el,index)=>
    <Card key={index}  item={el}/> )}
    
     </div>
    
        )



}

export default MovieList ;