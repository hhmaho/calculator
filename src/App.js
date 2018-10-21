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

function Digit(props){
  return(
    <div className="Digit" >
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  )
}

function Operators(props){
  return(
    <div className="Operator">
      <button>+{props.returnPlus}</button>
      <button>-{props.returnMin}</button>
      <button>*{props.returnMult}</button>
  </div>
  )
}

function Equal(props){
  return(
    <div>
      <button style={{fontSize: 18}}>={props.returnResult}</button>
  </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Returnresult: 0
    };
    //console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <span>{this.calculResult()}</span>
        <Digit onClick ={this.props}></Digit>
        <Operators onClick ={this.props}></Operators>
        <Equal 
        onClick={this.props}>
        </Equal>
      </div>
    );
  }
  //method
  calculResult() {
    //const {result} = this.state;//object destructuring ipv this.state
    return 5 + 2 //result//hier eventueel foutmelding: this.state.count === "string" ? <p>input error</p> : this.state.count;
    }
}



export default App;
