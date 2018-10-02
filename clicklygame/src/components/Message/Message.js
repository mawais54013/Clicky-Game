import React from "react";
import "./Message.css";

const Message = props => (
    <div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
    {props.children}
    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>
);

export default Message;