import axios from 'axios';


const appMeta = {
	gallery: [
		{ name: 'All', icon:'' },
		{ name: 'Input', icon:'' },
		{ name: 'Process', icon:'' },
		{ name: 'Analysis', icon:'' },
		{ name: 'Output', icon:'' }
	]
};


export const appOpt = {
	hostAddrs: () => {
		// return 'http://hdtest.tool4.us';
		return 'http://10.186.119.102:7777';
	},

	initialize: (cb) => {
		axios.get(appOpt.hostAddrs() + '/appOption')
		.then(res => {
			// TODO set up options gotten from the server
			if (cb) cb(true);
		})
		.catch(res => {
			if (cb) cb(false);
		});
	},

	isReady: () => {
		return true;
	},

	getGalleryList: () => {
		return appMeta.gallery;
	}

};

export default appOpt;
