import React from 'react';

const validationcomponent = ( props ) => {
  return (
    <div className = "validation">
    <input type = "text"
    onChange = {props.changed}
    value={props.length}
    />
    </div>


      // <h1>"Too short"</h1>
      // <h1>"Too long"</h1>
  )
};

export default validationcomponent;


// <p>{props.inputtedwords}</p>
