import React, { Component } from 'react';

export default class Search extends Component {
  
  constructor(props){
    super(props);
  }

  // make the callback function required.
  static propTypes = {
    callback: React.PropTypes.func.isRequired
  }

  // If the search term does not meet criteria for searching, a null is sent to the callback.
  onSearchType(e){
    const text = e.target.value;
    this.props.callback(text.length >= this.props.minChars ? text : null);
  }

  componentDidMount(){
    if(this.props.autoFocus){
      document.getElementById('search-input').focus();
    }
  }

  // This focus handler sets a body class and it also selects the text inside the input (if any).
  onFocus(e){
    document.body.className = 'focused';
    e.persist(); // make sure we have access to the synthetic event in the timeout ahead.
    setTimeout(()=>{
        // this is inside a timeout to make it work on mobile devices.
        e.target.setSelectionRange(0, e.target.value.length);
    }, 1);
  }

  render() {
    return (
      <div className="app-search">
        <input
          id="search-input"
          className="text-input"
          type="text"
          placeholder="Search by city name"
          onChange={this.onSearchType.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={() => document.body.className = ''}
        />
      </div>
    );
  }

}