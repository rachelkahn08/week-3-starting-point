<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import App from './App.js';
import Counter from './Counter.js';
import { Link } from 'react-router-dom';

class CounterPage extends Component
{
	render () {

		const { counterNumber } = this.props;

		return (
			<div>
				<Counter number={ counterNumber } />
			</div>
		);
	}
}

export default CounterPage;

=======
import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

import { Link } from "react-router-dom";
import Counter from "./Counter";

class CounterPage extends Component {
  render() {
    const { num } = this.props;

    return (
      <div>
        <Counter num={num} />
      </div>
    );
  }
}

export default CounterPage;
>>>>>>> origin/master
