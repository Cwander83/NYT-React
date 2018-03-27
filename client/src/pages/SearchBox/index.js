import React from "react";
import { Container, Row } from "../../components/Grid";

const SearchBox = props =>
<Container fluid> 
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
     <Row>
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
        </Row>
   </Container>     
    
    
    
export default SearchBox;