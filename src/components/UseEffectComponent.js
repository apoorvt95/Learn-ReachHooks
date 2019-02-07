import React, { useEffect, useState } from 'react'

export default function UseEffectComponent(props){
    //useEffect is a built-in hook. It is used in Data fetching, setting up a subscription, and manually changing the DOM in React components. It acts as componentDidMount, componentDidUpdate & componentWillUnmount in a single API.

    //In some cases, you might want to perform clean for eg., subscription. In that case, if using classes you've to uses componentDidMount and componentWillUnmount and perform subscription and un-subscription respectively. There, useEffect Hook comes handy as you can return a function which will perform clean up.

    //You can also use multiple useEffect hooks as compared to lifecycle methods. The hooks will pe executed in the order they are written.

    //We can also specify in useEffect whether to re-render always or only after a state changes. We used to handle this in componentDidUpdate with the help of prevProps and prevState. In this example, in useEffect after passing the function you can also pass an array of state on basis of useEffect will re-render the component.

    const [count, setCount] = useState(0);
    
    //In class example, we've used componentDidUpdate instead of this.
    useEffect(() => {
        document.title = `count = ${count}`
    }, [count]);
    
    return (
        <div>
            <h4>1. UseEffectComponent</h4>
            <p>useEffect is a built-in hook. It is used in Data fetching, setting up a subscription, and manually changing the DOM in React components. It acts as componentDidMount, componentDidUpdate & componentWillUnmount in a single API.</p><br></br>
            <p>In some cases, you might want to perform clean for eg., subscription. In that case, if using classes you've to uses componentDidMount and componentWillUnmount and perform subscription and un-subscription respectively. There, useEffect Hook comes handy as you can return a function which will perform clean up.</p><br></br>
            <p>You can also use multiple useEffect hooks as compared to lifecycle methods. The hooks will pe executed in the order they are written.</p><br></br>
            <p>We can also specify in useEffect whether to re-render always or only after a state changes. We used to handle this in componentDidUpdate with the help of prevProps and prevState. In this example, in useEffect after passing the function you can also pass an array of state on basis of useEffect will re-render the component.</p><br></br>
            The value of count = {count}, see how the title changes onclicking increment. <br />
            <button onClick={() => {setCount(count+1)}}>Increment</button>
        </div>
    );
}

// export default class UseEffectComponent extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidUpdate(){
//         document.title = `count = ${this.state.count}`
//     }

//     render(){
//         return(
//             <div>
//                 <h4>2. UseEffectComponent</h4>
//                 The value of count = {this.state.count} <br />
//                 <button onClick={() => {this.setState({count: this.state.count + 1})}}>Increment</button>
//             </div>
//         );
//     }
// }