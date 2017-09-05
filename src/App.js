import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Photo } from './photo';
import { Menu } from './menu';

class App extends Component {
  render() {
    return (	 
	  <div className="App">
        <div className="Header"></div>
		<div className="Menu"><Menu></Menu></div>
		<div className="Body"></div>
		<h1>Hello world!</h1>
		<div className="PhotoArray"><Photo></Photo></div>
		</div>	 
    );
  }
}

export default App;