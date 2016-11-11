import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import Api from '../services/Api';

/**
 * Main application component class. 
 * This class instantiates a search bar and a results list
 * and works by connecting these two via a search API method.
 * The Search component is provided with a callback (onSearch)
 * and this function will perform a search on the given temr 
 * and forward the results to the Results component.
 */

export default class App extends Component {
  
  /**
   * The class contructor. It sets the state with no search results.
   * If the results are null, then the user is/has not searched for anything yet.
   * @param {object} props - The component properties.
   */
  constructor(props){
    super(props);
    this.state = {
      results: null
    };
  }

  /**
   * The search callback. This method takes a term as a string and uses the Api
   * service to run a search on the dataset. After getting a response, it is 
   * set in the state, which will in turn re-render the component, providing the
   * search resul data to the Results component for display.
   * @param {string} term - The search term as it was typed by the user.
   */
  onSearch(term){
    const results = Api.search(term);
    this.setState({ results });    
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <h1>City Search!</h1>
        </header>
        <Search  callback={this.onSearch.bind(this)} autoFocus={false} minChars={3}/>
        <Results results={this.state.results} />
      </div>
    );
  }

}
