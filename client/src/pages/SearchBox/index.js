import React from "react";

const SearchBox = props =>
<div className="container"> 
   <form>
    <div className="form-group">
        <label htmlFor="topic">Topic</label>
        <input
            onChange={props.handleTopicChange}
            type="text"
            className="form-control"
            id="topic"
            aria-describedby="emailHelp"/>
    </div>
    <div className="form-group">
        <label htmlFor="start-year">Start Year</label>
        <input
            onChange={props.handleStartYearChange}
            type="text"
            className="form-control"
            id="start-year"/>
    </div>
    <div className="form-group">
        <label htmlFor="end-year">End Year</label>
        <input
            onChange={props.handleEndYearChange}
            type="text"
            className="form-control"
            id="end-year"/>
    </div>
    <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-success pull-right">Submit</button>
</form>
     <div className="row">
     <div className="col-lg-12">
       <div className="panel panel-primary">
         <div className="panel-heading">
           <h3 className="panel-title">
             <strong>
               <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
             </strong>
           </h3>
         </div>
         <div className="panel-body">
         {props.renderArticles()}
         </div>
       </div>
     </div>
        </div>
   </div>     
    
    
    
export default SearchBox;