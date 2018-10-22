import React, { Component } from 'react';
import './App.css';

function Operators(props) {
  return (
    <div className="Operator">
      <button>+{props.returnPlus}</button>
      <button>-{props.returnMin}</button>
      <button>*{props.returnMult}</button>
    </div>
  )
}

function Equal(props) {
  return (
    <div>
      <button style={{ fontSize: 18 }}>={props.returnResult}</button>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "1 + 1",
      output: "test",
    };
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.input}</span>
        <br />
        <button onClick={() => this.setState({ input: this.state.input.concat("1") })}>1</button>
        <button onClick={() => this.setState({ input: this.state.input.concat("2") })}>2</button>
        <button onClick={() => this.setState({ input: this.state.input.concat("3") })}>3</button>
        <button onClick={() => this.setState({ input: ("") })}>clear</button>
        <br />
        <span>{this.state.output}</span>
        <button onClick={() => this.setState({ output: this.state.input })}>=</button>
        <Operators onClick={this.props}></Operators>
        <Equal
          onClick={this.props}>
        </Equal>
      </div >
    );

  }
}

export default App;
