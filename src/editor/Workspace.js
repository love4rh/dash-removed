import React from 'react';
import PropTypes from 'prop-types';

import './Editor.css';

import { DiagramEditor } from './DiagramEditor.js';

import sample from '../assets/svg/sample.svg';



class Workspace extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    // TODO modify
    this.state = {
      nodes: {
        'n1': { id:'n1', name:'test1', image:sample, x:100, y:100 },
        'n2': { id:'n2', name:'test2', image:sample, x:200, y:200 },
        'n3': { id:'n3', name:'test3', image:sample, x:200, y:300 },
        'n4': { id:'n4', name:'test4', image:sample, x:300, y:300 }
      },

      links: [
        { begin:'n1', end:'n2' },
        { begin:'n2', end:'n3' }
      ]
    };
  }

  onDiagramEvent = (type, param) => {
    console.log(type, param);
  }

  render () {
    const { height, width } = this.props;

    return (
      <div className="workspace" style={{ width:(width - 15), height }}>
        <DiagramEditor
          width={width - 15}
          height={height - 2}
          eventReciever={this.onDiagramEvent}
          nodes={this.state.nodes}
          links={this.state.links}
        />
      </div>
    );
  }
}

export default Workspace;
export { Workspace };
