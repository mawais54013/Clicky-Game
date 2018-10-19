import React from "react";
import "./Wrapper.css";
// same thing with wrapper as title 
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;
