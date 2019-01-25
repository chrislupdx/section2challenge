import React from 'react';


const validationcomponent = ( props ) => {
  return (
    <div className = "vadiation">
    <input type = "text" onChange = {props.changed}
    value="no" />
    </div>
  )
};

export default validationcomponent;
