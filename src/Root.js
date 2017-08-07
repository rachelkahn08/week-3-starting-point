import React, { Component } from "react";

<<<<<<< HEAD
import './App.css';
import { Link } from 'react-router-dom';

import Counter from './Counter';

class Root extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="Root">
          <p>This is the ROOT PAGE!</p>
          <p>But you can also check out this <Link to="/Counter1">counter</Link> that I made.</p>
	       </div>
        );

    }
=======
import "./App.css";

import { Link } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <div>
        <p>This is the home page.</p>
        <p>
          Check out the fun <Link to="/counter1">counter</Link>.
        </p>
      </div>
    );
  }
>>>>>>> origin/master
}

export default Root;
