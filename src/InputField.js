import React, { Component } from 'react';
import logo from './logo.svg';
import App from './App.js';
import Counter from './Counter.js';
import { Link } from 'react-router-dom';

class InputField extends Component
{	
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};

		this.onFormChange = this.onFormChange.bind(this);
		//this.submitForm = this.submitForm.bind(this);
	}

	onFormChange(e) {
		this.setState({ value: e.target.value });
	}

	render () {

		return (
			<div>
				<input type='text' value={this.state.value} onChange={this.onFormChange}></input>
			</div>
		);
	}
}

export default InputField;

