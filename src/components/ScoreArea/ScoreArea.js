import React from "react";
import "./ScoreArea.css";

const Area = props => (
    <div className="container">
  <div className="row">
    <div className="col-md">
      
    </div>
    <div className="col-md-11">
    <div className="jumbotron">
       {/* current score appears here */}
        <div className="container">
        {/* score will be used by props children */}
        <h3 className="area">Current Score {props.children}</h3>
    </div>
    </div>
    </div>
    <div className="col-md">
      
    </div>
  </div>
</div>
);

export default Area;

