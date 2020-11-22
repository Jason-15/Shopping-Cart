import React, { Component } from 'react';

class Navbar extends Component {
    
    render() { 
        return ( 
        
        <nav className="navbar navbar-light bg-white"  >
         
        <span className="navbar-brand mb-0 h1">
        Items Bought <span className="badge bage-pill badge-secondary">{this.props.totalcounter}
                </span>
        </span>
      </nav>
       );
    }
}
 
export default Navbar;