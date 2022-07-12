import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button style={{background:!props.isValid?'salmon':'#8b005d;'}} type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
