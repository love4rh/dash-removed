import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import C from '../common/Constants.js';
import { IB } from '../common/ImageBank.js';

import { isvalid, makeid } from '../common/tool.js';

import './Editor.css';

import { DiagramEditor } from './DiagramEditor.js';



@inject('appData')
@observer
class Workspace extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.wsKey = 'wsmain-' + makeid(8);
  }

  onDiagramEvent = (type, param) => {
    if( type === C.evtSelectNode ) {
      // this.props.eventRelay(type, param.id); // nodeId
    }
  }

  handlDragOver = (ev) => {
    const nodeMeta = ev.dataTransfer.getData(C.evtDnDNode);

    if( isvalid(nodeMeta) ) {
      ev.preventDefault();
    }
  }

  handleDrop = (ev) => {
    ev.preventDefault();

    const nodeMeta = ev.dataTransfer.getData(C.evtDnDNode);

    const d = this.refs[this.wsKey];

    this.props.appData.addNode(JSON.parse(nodeMeta),
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
        key={this.wsKey + appData.redrawCount}
        style={{ width:adjWidth, height, overflow:'auto' }}
        onDrop={this.handleDrop}
        onDragOver={this.handlDragOver}
      >
        <DiagramEditor
          width={adjWidth}
          height={height}
          eventReciever={this.onDiagramEvent}
          nodes={isvalid(prjData) ? prjData.nodes : {}}
          links={isvalid(prjData) ? prjData.links : []}
          getImage={IB.getNodeImage}
        />
      </div>
    );
  }
}

export default Workspace;
export { Workspace };
