import React from 'react';

const validationcomponent = ( props ) => {
  return (
    <div className = "validation">
    <input type = "text"
    onChange = {props.changed}
    value={props.words} />

    </div>
  )
};

export default validationcomponent;

// <p>{props.inputtedwords}></p>
