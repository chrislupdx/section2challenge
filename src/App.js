import React, { Component } from 'react';
import Input from './Components/Input';
import Char from './Components/Char';
import Validationcomponent from './Components/Validation';

class App extends Component {
  state = {
    inputtedwords: 'ugh',
    length: 0,
    longenough: false,
    tooshort: false,
  }

  // charcomponentHandler = (event) => {
  // //map key input into individual comopnents for every word there is in input on listen
  //   console.log('lol');
  // }

  lengthHandler = (event) => {
    this.setState({inputtedwords: event.target.value, length: event.target.value.length });
    console.log('ding');
  }

  longenoughHandler = (event) => {
    const longenough = this.state.longenough;
    this.setState({longenough: !longenough});
    //i'm pretty sure we need to inject conditional loggic here
  }

  tooshortHandler = (event) => {
    const tooshort = !this.state.tooshort;
    this.setState({tooshort: !tooshort});
  }

  render() {
    const style = {
      backgroundColor: 'Grey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let inputcharacters = this.state.inputtedwords;
    let longenough = null;
    let tooshort = null;

    if (inputcharacters) {
      inputcharacters = (
        <div className="showinput">
        <h1> {this.state.inputcharacters} </h1>
        </div>
      );
    }


    if (this.state.length > 5) {
      longenough = (
        <div className="longenough">
        <h1> Long enough </h1>
        </div>
      );
    }

    if (this.state.length < 5) {
      tooshort = (
        <div className="tooshort">
        <h1> Too short </h1>

        </div>
      );
    }

    return (
      <div className="App">
        <form>
          <Input
          changed = {this.lengthHandler}
          />
        </form>

      <div className="validation">
        <Validationcomponent
          changed = {this.lengthHandler}
          length = {this.state.length}
        />
        {longenough}
        {tooshort}

        <Char
          style = {style}
        />

      </div>

      </div>
    );
  }
}

export default App;

// <input type="text" onChange={this.lengthHandler} />
