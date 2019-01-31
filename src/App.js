import "@babel/polyfill";
import React, { Component } from 'react';

import './App.css';
import { MainFrame } from './view/MainFrame.js';
import { S3Explorer } from './view/S3Explorer.js';



class App extends Component {
	constructor (props) {
		super(props);

    // console.log(window.location.href);
    const path = window.location.href;

		this.state = {
			page: path.endsWith('dash') ? 'dash' : 's3'
		}
	}

  render () {
    return (
    	<div className="App">
    		{ this.state.page === 's3' ?
    			<S3Explorer /> :
    			<MainFrame />
      	}
      </div>
    );
  }
}

export default App;
