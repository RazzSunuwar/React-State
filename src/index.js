import React from 'react';
import ReactDOM from 'react-dom';

// Example
// Specifiy all the properties your component need:

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1990
        };
    }
    render(){
        return(
            <div>
                <h1>My Car {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}
                </p>
            </div>
        );
    };
};

ReactDOM.render(<Car />, document.getElementById('root'));

// Note: The state object can contain as many properties as you like:

