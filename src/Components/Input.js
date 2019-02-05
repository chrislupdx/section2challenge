import React from 'react';

import './Char.css';

const input = (props ) => {
  return (
    <div className ="Input">
      <input
      type="text"
      onChange={props.changed}
      value ={props.inputtedwords} />
    </div>
  )
};

export default input;
