import React, { useState } from 'react';

export default function UseStateComponent(props){
    //useState is a built-in hook. it uses an initial state and returns a state and the function that updates that state. In below case count is the state and setCount is the function that updates the state. '0' is the default value assigned to count.
    const [count, setCount] = useState(0);
    return (
        <div>
            <h4>1. UseStateComponent</h4>
            <p>useState is a built-in hook. it uses an initial state and returns a state and the function that updates that state. In below case count is the state and setCount is the function that updates the state. '0' is the default value assigned to count.</p><br></br>
            The value of count = {count} <br />
            <button onClick={() => {setCount(count+1)}}>Increment</button>
        </div>
    );
}

// export default class UseStateComponent extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {count: 0};
//         this.increment = () => {this.setState({count: this.state.count + 1})}
//     }

//     render(){
//         return(
//             <div>
//                 <h4>UseStateComponent</h4>
//                 The value of count = {this.state.count} <br />
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }