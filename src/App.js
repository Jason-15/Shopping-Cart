import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import Counters from './Components/counters';
import background from './Components/photo.jpg'

class App extends Component {


  state = 
  { 
    
      counters:
      [
          {id:1,value:0},
          {id:2,value:0},
          {id:3,value:0},
          {id:4,value:0}
      ],
      num:4
       
   };

   
  
   render()
   {
   return (
   

     <React.Fragment>
     

     <Navbar 
     totalcounter={this.state.counters.filter
     (temp=>temp.value>0).length}>
     </Navbar>
     
     <main className="container">
     
      
      <Counters
       
       counters={this.state.counters}
       onDelete={this.handleDelete}
       onIncrement={this.handleIncrement} 
       onReset={this.handleReset}
       onAdd={this.handleAdd}
       onPhoto={this.photo}>
      </Counters>
    
     </main>
     </React.Fragment>
   );
 }
   
 

   handleDelete=counterID=>
  {
      const c=this.state.counters.filter(temp=>temp.id!=counterID);
      this.setState({counters:c});
  }
  
  handleAdd=()=>
  {
      const c=[...this.state.counters]
      c.push({id:this.state.num+1,value:0})
      this.state.num++
      this.setState({counters:c});
  }
  handleIncrement=c=>
  {
    const counters=[...this.state.counters];
    let index=counters.indexOf(c);
    counters[index]={...c};
    counters[index].value++;
    this.setState({counters});

    return (
      <div>sdsddsdsds</div>
    );
  }
  handleReset=()=>
  {
      const counters =this.state.counters.map(temp=>
          {
          temp.value=0
           return temp}
          );
      this.setState({counters})
  }
  
    
   
  

}
export default App;

