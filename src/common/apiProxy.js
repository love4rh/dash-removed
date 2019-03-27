import axios from 'axios';
import { appOpt } from '../appMain/AppSetting.js';


const _serverBaseUrl_ = appOpt.hostAddrs();


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

  getInitialSetting: (cbSuccess, cbError, cbComplete) => {
    axios.get(_serverBaseUrl_ + '/initial')
    .then(res => {
      if (cbSuccess) cbSuccess(res);
      if (cbComplete) cbComplete();
    })
    .catch(res => {
      if (cbError) cbSuccess(res);
      if (cbComplete) cbComplete();
    });
  },

  /**
   * request Crawlego Script.
   * param: path, name
   */
  getScript: (param, cbSuccess, cbError, cbComplete) => {
  	axios.get(_serverBaseUrl_ + '/script?' + apiProxy.makeGetParam(param))
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
