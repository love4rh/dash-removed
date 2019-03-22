import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider

import * as serviceWorker from './serviceWorker';

import App from './appMain/App';
import AppData from './appMain/AppData.js';

import './index.css';

import 'semantic-ui-css/semantic.min.css';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';


const appData = new AppData();

ReactDOM.render(
	<Provider appData={appData}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
