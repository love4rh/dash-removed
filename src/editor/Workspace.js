import React from 'react';
import PropTypes from 'prop-types';

import C from '../common/Constants.js';
import { IB } from '../common/ImageBank.js';

import './Editor.css';

import { DiagramEditor } from './DiagramEditor.js';



class Workspace extends React.Component {
  static propTypes = {
    eventRelay: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    projectData: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
  }

  onDiagramEvent = (type, param) => {
    if( type === C.evtSelectNode ) {
      this.props.eventRelay(type, param.id); // nodeId
    }
  }

  render () {
    const { height, width, projectData } = this.props;
    const adjWidth = width - 5; // border-width

    return (
      <div className="workspace" style={{ width:adjWidth, height }}>
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
