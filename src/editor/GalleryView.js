import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../component/Tab.js';

import './Editor.css';



class GalleryView extends React.Component {
  static propTypes = {
    galleryList: PropTypes.array.isRequired,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      activeTab: 0,
    }
  }

  handleTabChange = (tabIdx) => () => {
    this.setState({ activeTab: tabIdx });
  }

  render () {
    const { galleryList } = this.props;
    const { activeTab } = this.state;

    return (
      <div>
        <div className="paneTitle">Gallery</div>
        <Tab onTabChange={this.handleTabChange} panes={['A', 'B', 'C']} />
        <div style={{ height:'100vh', marginBottom:0, backgroundColor:'blue' }}>
          Node List
        </div>
      </div>
    );
  }
}

export default GalleryView;
export { GalleryView };
