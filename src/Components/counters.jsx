import React, { Component } from 'react';
import Counter from './counter';
import Background from './photo.jpg';




class Counters extends Component {
   
 
    render() {
        
        return (    
        <div>
             
     
            <button onClick={this.props.onReset} className="btn btn-info btn-outline-info mt-3 ml-5 pl-4 pr-4 btn-sm">Reset</button>
            <button onClick={this.props.onAdd} className="btn btn-info btn-outline-info mt-3 ml-4 pl-3 pr-3 btn-sm">Add Item</button>

            {this.props.counters.map(counter=>
            <Counter 
            key={counter.id}
            ondelete={this.props.onDelete}
            onincrement={this.props.onIncrement}
            counter={counter}>
            <h4 className="text-secondary sticky-top font-bold mt-4 pt-4 ml-5 mb-3" > Item Number : {counter.id}</h4>
            </Counter>
            )}

        </div> );
    }


    //under the hood
    titsty=
    {
     fontSize:20,
     fontWeight:"bold",
     margin:10,
     color:"hsl(203, 97%, 34%)",
     padding:15
    };
}
 
export default Counters;