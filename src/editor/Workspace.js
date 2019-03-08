import React from 'react';
import PropTypes from 'prop-types';

import C from '../common/Constants.js';

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

    //
  }

  onDiagramEvent = (type, param) => {
    if( type === C.evtSelectNode ) {
      this.props.eventRelay(type, param.id); // nodeId
    }
  }

  render () {
    const { height, width, projectData } = this.props;

    return (
      <div className="workspace" style={{ width:(width - 15), height }}>
        <DiagramEditor
          width={width - 15}
          height={height - 2}
          eventReciever={this.onDiagramEvent}
          nodes={projectData.nodes}
          links={projectData.links}
        />
      </div>
    );
  }
}

export default Workspace;
export { Workspace };
