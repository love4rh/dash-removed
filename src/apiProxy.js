import axios from 'axios';


// const _serverBaseUrl_ = 'http://hdtest.tool4.us';
const _serverBaseUrl_ = 'http://10.186.119.102:7777';


const apiProxy = {

	makeGetParam: (param) => {
		let p = '';

		for(let key in param) {
			if( '' !== p )
				p += '&';

			p += key + '=' + encodeURIComponent(param[key]);
		}

		return p;
	},

	ls: (cbSuccess, cbError, cbComplete) => {
		axios.get(_serverBaseUrl_ + '/list')
		.then(res => {
			if (cbSuccess) cbSuccess(res);
			if (cbComplete) cbComplete();
		})
		.catch(res => {
			if (cbError) cbSuccess(res);
			if (cbComplete) cbComplete();
		});
	},


	get: (param, cbSuccess, cbError, cbComplete) => {
		// console.log('apiProxy get', param);

		axios.get(_serverBaseUrl_ + '/get?' + apiProxy.makeGetParam(param))
		.then(res => {
			if (cbSuccess) cbSuccess(res);
			if (cbComplete) cbComplete();
		})
		.catch(res => {
			if (cbError) cbSuccess(res);
			if (cbComplete) cbComplete();
		});
	},

	// param: name, path, start, length
	getMore: (param, cbSuccess, cbError, cbComplete) => {
		// console.log('apiProxy getMore', param);

		axios.get(_serverBaseUrl_ + '/getMore?' + apiProxy.makeGetParam(param))
		.then(res => {
			if (cbSuccess) cbSuccess(res);
			if (cbComplete) cbComplete();
		})
		.catch(res => {
			if (cbError) cbSuccess(res);
			if (cbComplete) cbComplete();
		});
	},
};

export default apiProxy;
export {apiProxy};
