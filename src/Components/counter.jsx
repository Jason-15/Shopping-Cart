import React, { Component } from 'react';

class Counter extends Component {
    
    render()
    {       
          
        return (          
        <div>         
         {this.props.children}
         <span style={this.styles} className={this.getBadgeClasses()} >{this.formartCount()}</span>
         <button onClick={()=>this.props.onincrement(this.props.counter)} style={this.styles2} className="btn btn-secondary btn-outline-secondary btn sm  ">Increment</button>
         <button onClick={()=>this.props.ondelete(this.props.counter.id)} className="btn btn-danger btn-outline-danger btn-sm m-2">Delete</button>          
        </div>
        );
    }

    //helper shit, under the hood

    styles=
    {
        fontSize:20,
        fontWeight:"bold"
    };

    styles2=
    {
        fontSize:25,
        fontWeight:"bold"   
    };

   

    getBadgeClasses()
     {    
        let classes = "badge m-2  badge-";
        classes += this.props.counter.value == 0 ? "warning" : "info";
        return classes;
     };

    formartCount()
   {  
    
    return this.props.counter.value==0?'zero':this.props.counter.value;
   };

}

export default Counter;