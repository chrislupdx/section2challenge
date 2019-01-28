import React, { Component } from 'react';
import Input from './Components/Input';
import Validationcomponent from './Components/Validation';

class App extends Component {
  state = {
    inputtedwords: 'ugh', length: 0,
    longenough: false,
    tooshort: false,
  }

  lengthHandler = (event) => {
    this.setState({inputtedwords: event.target.value, length: event.target.value.length });
    console.log('ding');
  }

  longenoughHandler = (event) => {
    const longenough = this.state.longenough;
    this.setState({longenough: !longenough});
    //i'm pretty sure we need to inject conditional loggic here
  }

  render() {

    let longenough = null;
    let tooshort = null;

    if (this.state.length > 5) {
      longenough = (
        <div className="longenough">
        <h1> Long enough </h1>
        </div>
      );

    }
    // else {
    //   tooshort = (
    //     <div className="tooshort">
    //     <h1> Too short </h1>
    //     </div>
    //   );
    // }

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





      </div>

      </div>
    );
  }
}

export default App;

// <input type="text" onChange={this.lengthHandler} />
