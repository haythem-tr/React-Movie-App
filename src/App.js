import React, { Component } from 'react';
import MovieList from './movieListe.js'
import './App.css';
import Search from './search.js';
import Star from './star';


const tab=[{
  
  src:'http://fr.web.img4.acsta.net/c_215_290/pictures/18/09/20/10/41/4338768.jpg' ,
  
  description:'VENOM-(2018)',
  rating:3,
},
{src:'http://fr.web.img4.acsta.net/c_215_290/pictures/17/03/03/17/27/305158.jpg',
  
  description:'Fast and Furious 8-2017',
  rating:5,
},
{src:'http://fr.web.img6.acsta.net/c_215_290/pictures/18/02/23/10/50/3676882.jpg',
  
  description:'TOMB RAIDER-(2018) ',
  rating:4,
},
{src:'http://fr.web.img5.acsta.net/c_215_290/pictures/17/12/22/16/57/1069385.jpg',
  
  description:'Horse Soldiers-(2018)',
  rating:3,
},
{src:'https://upload.wikimedia.org/wikipedia/en/6/6e/Skyscraper_%282018%29_film_poster.png',
  
  description:'Skyscraper-(2018)',
  rating:4,
},
{src:'http://image.tmdb.org/t/p/original/in43bQ7k0ttr666IPP94IlbQbTR.jpg',
  
  description:'Mollys Games',
  rating:4,
}]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        news:tab,
        filtred:tab
      }
}
search(keyword){
  let searching =this.state.news.filter((el,i)=>{return el.description.toLowerCase().indexOf(keyword)>-1})
  this.setState({filtred:searching})
}
searchByRate=(clickedStar)=>{
  this.setState({
    filtred:this.state.filtred.filter((el)=>{return el.rating===clickedStar})
  })
}
addNewMovie() {
  this.setState({
tab:tab.push({  description: prompt('movie title: '),
rating: Number(prompt('movie rating: ')),
src:prompt('sourc')
})
})}
state = {
  loading: true
};
authenticate(){
  return new Promise(resolve => setTimeout(resolve, 2000))
}

componentDidMount(){
  this.authenticate().then(() => {
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
  })
}
 

  render() {
  
    
    return (
      <div className="App">
   
       <Star searchRate={y=>this.searchByRate(y)}/>
    <Search   searchname={keyword=>this.search(keyword) }/>
       <MovieList  tableau={this.state.filtred}/>
        <div className="new-movie-card"
        onClick={() => this.addNewMovie()}>
        +
    </div>
  
      
      </div>
    );
  }

}

export default  App;
