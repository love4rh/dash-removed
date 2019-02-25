import React from 'react';
import PropTypes from 'prop-types';

import './Editor.css';

import { DiagramEditor } from './DiagramEditor.js';



class Workspace extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

  }

  render () {
    const { height, width } = this.props;

    return (
      <div className="workspace" style={{ width:(width - 15), height }}>
        <DiagramEditor width={width - 15} height={height - 2} />
      </div>
    );
  }
}

export default Workspace;
export { Workspace };
