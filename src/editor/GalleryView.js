import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../component/Tab.js';

import { IB } from '../common/ImageBank.js';

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
      panes: [{
        icon: IB.getCatagoryImage('favorite'),
        tooltip: 'Favorite Nodes'
      }, {
        icon: IB.getCatagoryImage('input'),
        tooltip: 'Input Nodes'
      }, {
        icon: IB.getCatagoryImage('processing'),
        tooltip: 'Processing Nodes'
      }, {
        icon: IB.getCatagoryImage('chart'),
        tooltip: 'Nodes for Chart'
      }, {
        icon: IB.getCatagoryImage('output'),
        tooltip: 'Ouput Nodes'
      }]
    }
  }

  handleTabChange = (tabIdx) => {
    console.log('tab changed', tabIdx);
    this.setState({ activeTab: tabIdx });
  }

  handleTabClose = (tabIdx) => {
    console.log('tab closed', tabIdx);
  }

  render () {
    const { galleryList } = this.props;
    const { activeTab, panes } = this.state;

    return (
      <div>
        <div className="paneTitle">Gallery</div>
        <Tab onTabChange={this.handleTabChange} onTabClose={this.handleTabClose} panes={panes} />
        <div style={{ height:'100vh', marginBottom:0, backgroundColor:'white' }}>
          Node List
        </div>
      </div>
    );
  }
}

export default GalleryView;
export { GalleryView };
