import React, { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action){
    switch(action.type){
        case 'increment': return {count: state.count + 1}
        case 'decrement': return {count: state.count - 1}
        case 'reset': return initialState
        default: return state;
    }
}

export default function UseReducerComponent(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            count = { state.count }
            <button onClick={()=>{dispatch({type:'increment'})}}>+</button>
            <button onClick={()=>{dispatch({type: 'decrement'})}}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        </div>
    );
}