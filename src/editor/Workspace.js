import React from 'react';
import PropTypes from 'prop-types';



class Workspace extends React.Component {
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
        Workspace
      </div>
    );
  }
}

export default Workspace;
export { Workspace };
