import React, { Component } from 'react';
import Input from './Components/Input';
import Validationcomponent from './Components/Validation';

class App extends Component {
  state = {
    inputtedwords: 'ugh', length: 0,
  }

  lengthHandler = (event) => {
    this.setState({inputtedwords: event.target.value, length: event.target.value.length });
    console.log('ding');
  }

  render() {
    return (
      <div className="App">
        <form>
          <Input
          changed = {this.lengthHandler}
          />
        </form>

        <Validationcomponent

          changed = {this.lengthHandler}
          inputtedwords = {this.state.inputtedwords}
        />
      </div>
    );
  }
}

export default App;

// <input type="text" onChange={this.lengthHandler} />
