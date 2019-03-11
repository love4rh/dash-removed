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
			page: path.substring(path.lastIndexOf('/') + 1)
		}
	}

  render () {
    let appMain;

    if( this.state.page === 'dash' ) {
      appMain = (<MainFrame />);
    } else {
      appMain = (<S3Explorer />);
    }

    return (
    	<div className="App">{appMain}</div>
    );
  }
}

export default App;
