import React from 'react';
import './Concepts.css'
const Concepts = (props) => {
  return (
    <ul id='concepts'>
      {props.children}
    </ul>
  );
}

export default Concepts;
