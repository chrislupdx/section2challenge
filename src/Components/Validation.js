import React from 'react';


const validationcomponent = ( props ) => {
  return (
    <div className = "vadiation">
    <input type = "text" onChange = {props.changed}
    value={props.inputtedwords} />
    </div>
  )
};

export default validationcomponent;
