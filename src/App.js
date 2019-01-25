import React, { Component } from 'react';
import Input from './Components/Input';
import Validationcomponent from './Components/Validation';
class App extends Component {

state = {
  thingss : [
    { id: "134134", output: "asdf" },
    { id: "iobb", output: "aff"},
    { id: "r90rwr", output: "ggdgdd"},
    { id: "9oror", output: "ffdssfd"},
  ],
}

  changeHandler = (event, id) => {
    const Index = this.state.thingss.findIndex(t => {
      return t.id === id;
    });

    const unit = {
      ...this.state.thingss[Index]
    };

    unit.output = event.target.value;

    const units = [...this.state.units];
    units[Index] = unit;

    this.setState( {units: units})

  }

  render() {
    return (
      <div className="App">
        <Input />
        <Validationcomponent
        inputtedwords = "potatoes"
        />
      </div>
    );
  }
}

export default App;
