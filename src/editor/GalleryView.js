import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'semantic-ui-react'

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

  handleTabClick = (tabIdx) => () => {
    this.setState({ activeTab: tabIdx });
  }

  render () {
    const { galleryList } = this.props;
    const { activeTab } = this.state;

  	return (
      <div>
        <div className="paneTitle">Gallery</div>
        <Menu>
          { galleryList.map((o, i) => (
              <Menu.Item key={'nodeTab-' + i} name={'nodeTab-' + i}
                active={ activeTab === i}
                onClick={this.handleTabClick(i)}
              >
                {o.name}
              </Menu.Item>
            ))
          }
        </Menu>
        <div style={{ height:'100vh', marginBottom:0, backgroundColor:'blue' }}>
          Node List
        </div>
      </div>
    );
  }
}

export default GalleryView;
export { GalleryView };
