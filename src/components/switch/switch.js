import React from "react";
import './switch.css';

function Switch(props) {
  return (
    <nav>
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={props.toggleDarkMode} />
            <div className="slider round"></div>
        </label>
            <em>Enable Dark Mode!</em>
        </div>
    </nav> 
  );
}

export default Switch;