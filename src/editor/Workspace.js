import React from 'react';
import PropTypes from 'prop-types';

import C from '../common/Constants.js';
import { IB } from '../common/ImageBank.js';

import { isvalid, makeid } from '../common/tool.js';

import './Editor.css';

import { DiagramEditor } from './DiagramEditor.js';



class Workspace extends React.Component {
  static propTypes = {
    eventRelay: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    projectData: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.wsKey = 'wsmain-' + makeid(8);
  }

  onDiagramEvent = (type, param) => {
    if( type === C.evtSelectNode ) {
      this.props.eventRelay(type, param.id); // nodeId
    }
  }

  handlDragOver = (ev) => {
    const nodeId = ev.dataTransfer.getData(C.evtDnDNode);

    if( isvalid(nodeId) ) {
      ev.preventDefault();
    }
  }

  handleDrop = (ev) => {
    ev.preventDefault();

    const nodeId = ev.dataTransfer.getData(C.evtDnDNode);

    console.log('Dragged ' + nodeId,
      ev.clientX + this.refs[this.wsKey].scrollLeft,
      ev.clientY + this.refs[this.wsKey].scrollTop,
      this.refs[this.wsKey]
    );
  }

  render () {
    const { height, width, projectData } = this.props;
    const adjWidth = width - 5; // border-width

    return (
      <div ref={this.wsKey}
        className="workspace"
        style={{ width:adjWidth, height }}
        onDrop={this.handleDrop}
        onDragOver={this.handlDragOver}
      >
        <DiagramEditor
          width={adjWidth}
          height={height}
          eventReciever={this.onDiagramEvent}
          nodes={projectData.nodes}
          links={projectData.links}
          getImage={IB.getNodeImage}
        />
      </div>
    );
  }
}

export default Workspace;
export { Workspace };
