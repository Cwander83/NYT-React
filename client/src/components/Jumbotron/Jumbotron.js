import React from "react";

const Jumbotron = ({children}) => (
  <div style={{
    width: 700,
    clear: "both"
  }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
