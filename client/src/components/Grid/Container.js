import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`} style={{ width: 650, clear: "both" }}>
    {children}
  </div>
);
