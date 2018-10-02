import React from "react";
import "./ScoreArea.css";

const Area = props => (
    <div className="container">
  <div className="row">
    <div className="col-md">
      
    </div>
    <div className="col-md-11">
    <div className="jumbotron">
        {/* <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
        <div className="container">
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

