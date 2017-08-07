import React, { Component } from 'react';
import logo from './logo.svg';
import App from './App.js';
import Counter from './Counter';
import { Link } from 'react-router-dom';

class CounterForm extends Component 
{	
	constructor(props) {
		super(props);

		this.state = {
			title: 'Counter Name',
			initialValue: '0',
		};

		this.updateTitle = this.updateTitle.bind(this);
		this.updateInitialValue = this.updateInitialValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	updateTitle(e) {
		this.setState({ title: e.target.value });
	}

	updateInitialValue(e) {
		this.setState({ initialValue: e.target.value });
	}

	submitForm(e) {
		e.preventDefault();
		console.log(this.state.value);
	}

	render () {

		return (
			<div>
				<div>
					Enter Counter Name: <input type='text' value={this.state.title} onChange={this.updateTitle}></input>
				</div>
				<div> 
					Enter Initial Value: <input type='text' value={this.state.initialValue} onChange={this.updateInitialValue}></input>
				</div>
				<Counter title={this.state.title} counterValue={this.state.initialValue}/>
			</div>
		);
	}
}

export default CounterForm;

