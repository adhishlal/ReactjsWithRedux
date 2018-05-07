import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

class App extends Component {

reset()
{
  this.props.setAge('20');
  this.props.setName('Adhish')
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
          <p className="App-intro">The Username is: {this.props.user.name}</p>
          <p className="App-intro">The Age is: {this.props.user.age}</p>
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
      dispatch({
        type: "NAME",
        payload: name
      });
    },

    setAge: (age) => {
      dispatch({
        type: "AGE",
        payload: age
      });
    }


  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
