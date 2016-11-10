import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import Api from '../services/Api';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      results: null
    };
  }

  onSearch(term){
    const results = Api.search(term);
    this.setState({ results });    
  }

  render() {
    return (
      <div className="app-container">
        <Search callback={this.onSearch.bind(this)} autoFocus={true} minChars={3}/>
        <Results results={this.state.results} limit={0}/>
      </div>
    );
  }

}
