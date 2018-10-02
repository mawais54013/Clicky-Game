import React from "react";
import "./Title.css";
// title with props when called will appear in this format
const Title = props => <h1 className="title">{props.children}</h1>;

export default Title;
