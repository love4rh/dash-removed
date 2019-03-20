import React from 'react';
import PropTypes from 'prop-types';

import './Editor.css';



class ScriptView extends React.Component {
	static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
  }

  constructor (props) {
    super(props);

  } // */

  render () {
  	return (
      <div className="scriptView" style={{ width:'100%', height:'100%' }}>
        Script Viewer
      </div>
    );
  }
}

export default ScriptView;
export { ScriptView };
