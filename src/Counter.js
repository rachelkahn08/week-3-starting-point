import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Counter.css';

<<<<<<< HEAD
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      this.state = {
          counterValue: 0,
          title: 'Counter',
        } 

      if (this.props.counterValue > 0) {
        this.setState({counterValue: this.props.counterValue})
      }
    }

    increment() {
      let newState = parseInt(this.state.counterValue) + 1;

      this.setState({
        counterValue: newState,
      })
    }

    decrement() {
      let newState = this.state.counterValue - 1;
      
      if (newState < 1) {
        this.setState({
          counterValue: 0,
        })
      } else {
        this.setState({
          counterValue: newState,
        })
      }
    }

    reset() {
      this.setState({
        counterValue: 0,
      })
    }
=======
class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('Counter.constructor');

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      counter: 0
    };
  }

  componentWillMount() {
      console.log('Counter.componentWillMount');
  }

  componentDidMount() {
      console.log('Counter.componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
      console.log('Counter.componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('Counter.shouldComponentUpdate', nextProps, nextState);
      return true;
  }
>>>>>>> origin/master

  componentWillUpdate(nextProps, nextState) {
      console.log('Counter.componentWillUpdate', nextProps, nextState);
  }

<<<<<<< HEAD
  		const { title } = this.state;
      const { counterValue } = this.state;
  		
  		return (
        <div className="App-Main">
    	        <p>
              { title }: { counterValue }
              </p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>reset</button>
        </div>
        );
=======
  componentDidUpdate(prevProps, prevState) {
      console.log('Counter.componentDidUpdate', prevProps, prevState);
  }
>>>>>>> origin/master

  componentWillUnmount() {
      console.log('Counter.componentWillUnmount');
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    let newCount = this.state.counter - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    this.setState({
      counter: newCount
    });
  }

  reset() {
    this.setState({
      counter: 0
    });
  }

  render() {
    console.log('Counter.render');
    const { num } = this.props;
    const { counter } = this.state;

    return (
      <div className="counter">
        <h2>
          Counter #{num}: {counter}
        </h2>
        <nav>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>reset</button>
        </nav>
      </div>
    );
  }
}

// Counter.propTypes = {
//   num: PropTypes.number.isRequired,
// };

export default Counter;
