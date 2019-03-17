import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            keyword:''
            
           
        }

    }
   
    handelchange=(event)=>{
        this.setState({keyword:event.target.value})
        this.props.searchname(event.target.value)
    }
    render() { 
     
        return ( <div className='search'>
 <input type='text'  onChange={this.handelchange} />
        </div>

         );
    }
}
 
export default Search;