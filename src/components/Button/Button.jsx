import React from 'react'
import "./button.css";
import { useState } from 'react';

function Button(props) {
  let [color, setColor] = useState("pink");

  function handleClick (){
    props.onClick && props.onClick();
    setColor("gray");
  }

  return (
    <button className="universal"
            onClick={handleClick}
            style={{background: color}}>
      {props.children}
    </button>
  )
}

export default Button