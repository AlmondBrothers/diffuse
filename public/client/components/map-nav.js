import React from 'react';
import {Router, Route, browserHistory, Link} from 'react-router';
//import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    var pages = ['map', 'logout', 'party'];
    var navLinks = pages.map((page, index)=> {
      return (
        <Link key={index} className="button" to={'/' + page}>{page.charAt(0).toUpperCase() + page.slice(1)}</Link>
      );
    });
    return (
      <ul id="navbar">{navLinks}</ul>
    )  
  }
}

export default Navbar;