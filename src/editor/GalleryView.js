import React from 'react';
import PropTypes from 'prop-types';



class GalleryView extends React.Component {
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
        Gallery Viewer
      </div>
    );
  }
}

export default GalleryView;
export { GalleryView };
