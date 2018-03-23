import React from "react";

const SavedBox = props =>
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-white ">View Article</button>
          </a>
          <button className="btn btn-danger" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>

export default SavedBox;