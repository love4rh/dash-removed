import React from 'react';
// import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import appOpt from '../appMain/appSetting.js';

import { IB } from '../common/ImageBank.js';
import { Tab } from '../component/Tab.js';

import './Editor.css';
import GalleryItem from './GalleryItem.js';


@inject(stores => ({
  addNode: stores.appData.addNode,
}))
@observer
class GalleryView extends React.Component {
  static propTypes = {
    // galleryList: PropTypes.array.isRequired,
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
    this.setState({ activeTab: tabIdx });
  }

  handleDblClick = (p) => () => {
    // console.log('Gallery Item double clicked', p);
    this.props.addNode(p, 40, 40);
  }

  render () {
    const { height } = this.props;
    const { activeTab, panes } = this.state;

    const { gallery } = panes[activeTab];

    return (
      <div>
        <div className="paneTitle">Gallery</div>
        <Tab activeTab={activeTab} onTabChange={this.handleTabChange} panes={panes} />
        <div style={{ height:(height - 64), marginBottom:0, backgroundColor:'white' }}>
          <div key={`gp-${activeTab}`} className="galleryPanel">
            { gallery.map((p, idx) => (<GalleryItem key={`gpe-${idx}`} nodeMeta={p} onDoubleClick={this.handleDblClick(p)} />)) }
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryView;
export { GalleryView };
