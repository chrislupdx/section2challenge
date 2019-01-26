import React, { Component } from 'react';
import Input from './Components/Input';
import Validationcomponent from './Components/Validation';

class App extends Component {
  state = {
    inputtedwords: 'ugh',
  }

  lengthHandler = (event) => {
    console.log('ding');
    this.setState({inputtedwords: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <Input
        changed = {this.lengthHandler}
        />
        <Validationcomponent
        words = {Validationcomponent.inputtedwords}
        inputtedwords = {this.state.inputtedwords}
        />
      </div>
    );
  }
}

export default App;
