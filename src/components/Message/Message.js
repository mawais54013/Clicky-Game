import React from "react";
import "./Message.css";
// the message will appear if the user losses
const Message = props => (
    <div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
    <h2 id="head2">{props.children}</h2>
    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>
);

export default Message;