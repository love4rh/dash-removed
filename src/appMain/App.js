import "@babel/polyfill";
import React, { Component } from 'react';

// import { appOpt } from '../appMain/AppSetting.js';

import { MainFrame } from '../view/MainFrame.js';
import { S3Explorer } from '../view/S3Explorer.js';
import { SampleFrame } from '../view/SampleFrame.js';
import { JSONReport } from '../jsonTool/JSONReport.js';

import './App.css';



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
    } else if( this.state.page === 'working' ) {
      appMain = (<SampleFrame />);
    } else if( this.state.page === 's3' ) {
      appMain = (<S3Explorer />);
    } else {
      appMain = (<JSONReport />);
    }

    return (
    	<div className="App">{appMain}</div>
    );
  }
}

export default App;
