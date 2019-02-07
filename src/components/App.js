import React, { Component } from 'react';
import UseStateComponent from './UseStateComponent';
import UseEffectComponent from './UseEffectComponent';
import UseReducerComponent from './useReducerComponent';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Learning Hooks!</h1>
        <UseStateComponent />
        <UseEffectComponent />
        <UseReducerComponent />
      </div>
    );
  }
}

export default App;
