import "@babel/polyfill";
import React, { Component } from 'react';

import { appOpt } from '../appMain/appSetting.js';

import { MainFrame } from '../view/MainFrame.js';
import { S3Explorer } from '../view/S3Explorer.js';
import { SampleFrame } from '../view/SampleFrame.js';

import './App.css';


/**
 * MobX storage: appData
 */
class App extends Component {
	constructor (props) {
		super(props);

    // console.log(window.location.href);
    const path = window.location.href;

		this.state = {
			page: path.substring(path.lastIndexOf('/') + 1)
		}
	}

  componentDidMount () {
    // TODO app option version check
    // appOpt.initialize();
  }

  componentDidUpdate () {
    //
  }

  componentWillUnmount () {
    //
  }

  render () {
    let appMain;

    if( this.state.page === 'dash' ) {
      appMain = (<MainFrame />);
    } else if( this.state.page === 'monaco' ) {
      appMain = (<SampleFrame />);
    } else {
      appMain = (<S3Explorer />);
    }

    return (
    	<div className="App">{appMain}</div>
    );
  }
}

export default App;
