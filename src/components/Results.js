import React, { Component } from 'react';

export default class Results extends Component {
  
  constructor(props){
    super(props);
  }

  resultItem(result, index){
    return <li key={index} className="result-item">{result}</li>;
  }

  resultList(results){
    return <ul>{results.sort().map(this.resultItem)}</ul>;
  }

  render() {
    return (
      <div className="app-results">
        { (this.props.results && this.props.results.length == 0) ? <p>No results</p> : null }
        { (this.props.results && this.props.results.length > 0) ? this.resultList(this.props.results) : null }        
      </div>
    );
  }
}
