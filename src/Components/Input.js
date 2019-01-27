import React from 'react';

const input = (props ) => {
  return (
    <div className ="Input">
      <input type="text" onChange={props.changed} value = "" />
    </div>
  )
};

export default input;
