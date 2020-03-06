import React from 'react';
import ReactDOM from 'react-dom';

// Example
// Specifiy the state object in the constructor method:

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {brand: "Ford"};
    }
    render(){
        return(
            <div>
                <h1>My Car</h1>
            </div>
        );
    };
};

ReactDOM.render(<Car />, document.getElementById('root'));

// Note: The state object can contain as many properties as you like:

