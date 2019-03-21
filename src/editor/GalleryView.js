import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../component/Tab.js';
import { IB } from '../common/ImageBank.js';

import appOpt from '../common/appSetting.js';

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
      activeTab: 1,
      panes: [{
        icon: IB.getCatagoryImage('favorite'),
        tooltip: 'Favorite Nodes',
        gallery: appOpt.getGallery('favorite')
      }, {
        icon: IB.getCatagoryImage('input'),
        tooltip: 'Input Nodes',
        gallery: appOpt.getGallery('input')
      }, {
        icon: IB.getCatagoryImage('processing'),
        tooltip: 'Processing Nodes',
        gallery: appOpt.getGallery('processing')
      }, {
        icon: IB.getCatagoryImage('chart'),
        tooltip: 'Nodes for Chart',
        gallery: appOpt.getGallery('chart')
      }, {
        icon: IB.getCatagoryImage('output'),
        tooltip: 'Ouput Nodes',
        gallery: appOpt.getGallery('output')
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

    const { gallery } = panes[activeTab];

    return (
      <div>
        <div className="paneTitle">Gallery</div>
        <Tab activeTab={activeTab} onTabChange={this.handleTabChange} onTabClose={this.handleTabClose} panes={panes} />
        <div style={{ height:'100vh', marginBottom:0, backgroundColor:'white' }}>
          <div key={`gp-${activeTab}`} className="galleryPanel">
            {gallery.map((p, idx) => {
              return (
                <div key={`gpe-${idx}`} className="galleryItem">
                  <img className="galleryIcon" alt={p.name} src={IB.getNodeImage(p.type, true)} /> {p.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryView;
export { GalleryView };
