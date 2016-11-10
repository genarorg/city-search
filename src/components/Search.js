import React, { Component } from 'react';

export default class Search extends Component {
  
  constructor(props){
    super(props);
  }

  // make the callback function required.
  static propTypes = {
    callback: React.PropTypes.func.isRequired
  }

  onSearchType(text){
    this.props.callback(text.length >= this.props.minChars ? text : null);
  }

  render() {
    return (
      <div className="app-search">
        <input
          autoFocus={this.props.autoFocus}
          className="text-input"
          type="text"
          onChange={(e) => { this.onSearchType(e.target.value) }}
        />
      </div>
    );
  }

}