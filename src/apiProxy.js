import axios from 'axios';


// const _serverBaseUrl_ = 'http://hdtest.tool4.us';
const _serverBaseUrl_ = 'http://10.186.119.102:7777';


const apiProxy = {

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
	}

};

export default apiProxy;
export {apiProxy};

