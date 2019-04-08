import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import C from '../common/Constants.js';
import { IB } from '../common/ImageBank.js';

import { hasString, isvalid, makeid } from '../common/tool.js';

import './Editor.css';

import DiagramModel from './DiagramModel.js';
import { DiagramEditor } from './DiagramEditor.js';



@inject('appData')
@observer
class Workspace extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    pid: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.wsKey = 'wsmain-' + makeid(8);
    this.prjData = this.props.appData.getProjectDataByID(this.props.pid);
    this.diagramModel = new DiagramModel(this, this.prjData);
  }

  onDiagramEvent = (type, param) => {
    const { appData, pid } = this.props;

    console.log('Workspace Event', type, param);

    if( type === C.evtSelectNode ) {
      appData.displayNode(pid, param.id);
    } else if( type === C.evtConnectNodes ) {
      appData.connectNodes(pid, param.begin, param.end, 'normal', '');
    } else if( type === C.evtDeleteLinks ) {
      appData.deleteLinks(pid, param);
    } else if( type === C.evtDeleteNodes ) {
      appData.deleteNodes(pid, param);
    }
  }

  handleDragOver = (ev) => {
    const nodeMeta = ev.dataTransfer.getData(C.evtDnDNode);

    if( isvalid(nodeMeta) ) {
      ev.preventDefault();
    }
  }

  handleDrop = (ev) => {
    const { appData, pid } = this.props;
    const nodeMeta = ev.dataTransfer.getData(C.evtDnDNode);

    if( !hasString(nodeMeta) ) {
      return;
    }

    ev.preventDefault();

    const d = this.refs[this.wsKey];

    appData.addNode(pid, JSON.parse(nodeMeta),
      ev.clientX + d.scrollLeft - d.offsetLeft,
      ev.clientY + d.scrollTop - d.offsetTop
    );
  }

  render () {
    const { height, width, appData } = this.props;
    const adjWidth = width - 5; // border-width

    const prjData = appData.getActiveProject();

    return (
      <div ref={this.wsKey}
        style={{ width:adjWidth, height, overflow:'auto' }}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
      >
        <DiagramEditor
          width={adjWidth}
          height={height}
          model={this.diagramModel}
        />
        <div key={this.wsKey + appData.redrawCount}>
          {/* 노드나 링크가 추가되었을 때 Redrawing을 위하여 추가함. */}
        </div>
      </div>
    );
  }
}

export default Workspace;
export { Workspace };
