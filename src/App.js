import React, { Component } from 'react';
import './App.css';

// let firstInputNumber = 5
// let secondInputNumber = 2
// function plusOperator() {
//     return firstInputNumber + secondInputNumber
// }
// console.log(plusOperator())

// const plusOperator = (props) => {
//   return 5 + 2 //later props.digit = input(called props)
// }
// console.log(plusOperator())

// function Digit(props) {
//   return (
//     <div className="Digit" >
//       <button>1</button>
//       <button>2</button>
//       <button>3</button>
//     </div>
//   )
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const listDigits = numbers.map(number => <button key={"digit_" + number}>{number}</button>);


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
      // listDigits,
      // Returnresult: 0
    };
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.input}</span>
        <br />
        {/* <span>{this.state.listDigits}</span>
        <br /> */}
        <button onClick={() => this.setState({ input: this.state.input.concat("1") })}>1</button>
        <button onClick={() => this.setState({ input: this.state.input.concat("2") })}>2</button>
        <button onClick={() => this.setState({ input: this.state.input.concat("3") })}>3</button>
        <button onClick={() => this.setState({ input: ("") })}>clear</button>
        <br />
        <span>{this.state.output}</span>
        <button onClick={() => this.setState({ output: this.state.input })}>=</button>
        {/* <button onClick={() => console.log("abc")}>click</button> */}
        {/* <Digit onClick={this.props}></Digit> */}
        <Operators onClick={this.props}></Operators>
        <Equal
          onClick={this.props}>
        </Equal>
        {/* <input>{this.calculResult()}</input> */}
      </div >
    );

  }
  // //method
  // calculResult() {
  //   //const {result} = this.state;//object destructuring ipv this.state
  //   return (
  //     "1 + 1"
  //   ) //result//hier eventueel foutmelding: this.state.count === "string" ? <p>input error</p> : this.state.count;
  // }
}

export default App;
