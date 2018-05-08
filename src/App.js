import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import { incNumber, decNumber, resetNumber } from './actions/mathAction';
import { setName, setAge } from './actions/userAction';

class App extends Component {

reset()
{
  this.props.setAge('20');
  this.props.setName('Adhish')
  this.props.resetNumber(0);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactJS Example with Redux</h1>
        </header>

        <button className="button" onClick={() => this.props.setName('Sangram')}>Change the Username</button>

        <button className="button" onClick={() => this.props.setAge('100')}>Change the Age</button>

        <button className="button" onClick={this.reset.bind(this)}>Reset</button>

        <div>
<p className="App-intro">
<button className="button" onClick={() => this.props.decNumber(1)}>-</button>
{this.props.math.result}
<button className="button" onClick={() => this.props.incNumber(1)}>+</button>
</p>
</div>

        <div>
          <p className="App-intro">The Username is: <code>{this.props.user.name}</code></p>
          <p className="App-intro">The Age is: <code>{this.props.user.age}</code></p>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    setName: (name) => {
      dispatch(
      setName(name)
    );
  },

    setAge: (age) => {
      dispatch(setAge(age)
    );
  },

    incNumber: (number) => {
      dispatch(
        incNumber(number)
      );
    },

    decNumber: (number) => {
      dispatch(
        decNumber(number)
      );
    },

    resetNumber: (number) => {
      dispatch(
        resetNumber(number)
      );
    }


  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
