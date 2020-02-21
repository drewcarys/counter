import React, {Component} from 'react';

class Counter extends Component {
constructor() {
  super();
  this.state = {
    count: 0,
  };
}

//this is where our methods go
increment = () => {
  this.setState ({
    count: this.state.count + 1
  })
}

decrement = () => {
  this.setState ({
    count: this.state.count - 1
  })
}

clear = () => {
  this.setState ({
    count: this.state.count = 0
  })
}
ToggleClick = () => {
    this.setState({
       show: !this.state.show
     });

  }






  render() {
    return (

      <div className="container">
        <div className="navbar">Counter</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.clear}>Clear</button>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>

          <button onClick={this.ToggleClick}>
          { this.state.show ? 'Single Increment' : 'Double Increment' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }

      </div>
      </div>
    );
  }
}

export default Counter;
