import React from 'react';
import PropTypes from 'prop-types';



class ScriptView extends React.Component {
	static propTypes = {
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

  }

  render () {
  	return (
      <div style={{ width:'100%', height:'100%' }}>
        Script Viewer
      </div>
    );
  }
}

export default ScriptView;
export { ScriptView };
