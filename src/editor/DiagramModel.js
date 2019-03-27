import C from '../common/Constants.js';

import { IB } from '../common/ImageBank.js';
import { isvalid } from '../common/tool.js';

import appOpt from '../appMain/AppSetting.js';



/**
 * DiagramEditor를 그리기 위하여 필요한 데이터 및 기능 인터페이스 제공.
 */
export default class DiagramModel {
	constructor(receiver, prjData) {
		this.receiver = receiver;
		this.prjData = prjData;
	}

	/*
	getNodeImage: PropTypes.func,
  eventReciever: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
  nodes: PropTypes.object.isRequired,
  // */


  // return nodes map. nid --> node object
  getNodes = () => {
  	return isvalid(this.prjData) ? this.prjData.nodes : {};
  }

  // return list of links
  getLinks = () => {
  	return isvalid(this.prjData) ? this.prjData.links : [];
  }

  getNodeImage = (type) => {
  	return IB.getNodeImage(type);
  }

  isPossibleToConnect = (beginId, endId) => {
  	return beginId !== endId && endId === 'gZcqmSnM';
  }

  eventReciever = (type, param) => {
  	this.receiver.onDiagramEvent(type, param);
  }

  deleteNodes = (nodes) => {
  	this.receiver.onDiagramEvent(C.evtDeleteNodes, nodes);
  }

  deleteLinks = (links) => {
  	this.receiver.onDiagramEvent(C.evtDeleteLinks, links);
  }
}
