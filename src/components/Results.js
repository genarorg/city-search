import React, { Component } from 'react';

export default class Results extends Component {
  
  constructor(props){
    super(props);
  }

  // Renders a list item
  resultItem(result, index){
    return <li key={index} className="result-item">{result}</li>;
  }

  // Renders the result List
  resultList(results){
    return <ul className="result-list" >{results.sort().map(this.resultItem)}</ul>;
  }

  render() {
    // Shows "no results" if the results prop is an empty string. If results is not null 
    // it contains at least one result, the list will be shown. null means the user is not actively searching.
    return (
      <div className="app-results">
        { (this.props.results && this.props.results.length == 0) ? <p>No results</p> : null }
        { (this.props.results && this.props.results.length > 0) ? this.resultList(this.props.results) : null }        
      </div>
    );
  }
}
