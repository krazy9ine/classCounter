import React, { Component } from 'react';
import './CounterStyle.css'; 

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-text">{this.state.count}</h1>
        <button className="counter-button decrement" onClick={this.decrement}>-</button>
        <button className="counter-button increment" onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
