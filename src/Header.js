import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

<<<<<<< HEAD
import { NavLink } from 'react-router-dom';

class Header extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h2>{title}</h2>

            <nav className="nav-menu">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/Counter1">Counter 1</NavLink></li>
                <li><NavLink to="/Counter2">Counter 2</NavLink></li>
                <li><NavLink to="/CounterForm">Counter Form</NavLink></li>
            </nav>
	        </div>
        );

    }
=======
class Header extends Component {
  render() {
    return (
      <div className="App-Menu">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/counter1">Counter 1</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form Example</NavLink>
            </li>
            <li>
              <NavLink to="/lifecycle">Lifecycle Example</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
>>>>>>> origin/master
}

export default Header;
