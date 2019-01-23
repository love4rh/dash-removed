import React, { Component } from 'react';
import logo from '../logo.svg';
// import css from './MainFrame.less';

import FileListView from './FileListView.js';
import DataGrid from '../grid/DataGrid.js';
import DataSource from '../grid/DataSource.js';

import apiProxy from '../apiProxy.js';

import {
  Container,
  Icon,
  Image,
  Menu,
  Loader,
  Dimmer,
} from 'semantic-ui-react';


const _testDs = new DataSource({ title: 'TEST', columnCount: 7, rowCount: 1000000, rowHeight: 32 });


class MainFrame extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeMenu: 'Home',
      fileList: [],
      loading: false,
      pageType: 'grid', // 'list',

      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (ev) => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  handleReload = () => {
    this.setState({ loading:false });

    apiProxy.ls((res) => {
      console.log('api call success', res);
      if (res && res.data) {
        this.setState({fileList: res.data.list});
      }
    }, (err) => {
      console.log('api call error', err);
    }, () => {
      this.setState({ loading:false });
    });
  }

  handleMenuClick = (ev, data) => {
    console.log(ev, data);
    this.setState({ activeMenu: data.name });

    if (data.name === 'refresh') {
      this.handleReload();
    }
  }

  handleSwitch = (type, arg) => {
    this.setState({ pageType: type });
  }

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Menu.Item header name='Home' onClick={this.handleMenuClick}>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            S3 Explorer
          </Menu.Item>
          <Menu.Item name='refresh' onClick={this.handleMenuClick}>Refresh</Menu.Item>
          <Menu.Item name='setting' position='right' onClick={this.handleMenuClick}>
            <Icon name='setting' size='large' />
          </Menu.Item>
        </Menu>

        <Container text style={{ height: '55px' }}>&nbsp;</Container>

        {this.state.loading ? (<Dimmer active inverted><Loader content='Loading' /></Dimmer>) : null}

        {this.state.pageType === 'grid'
          ? <DataGrid
              height={this.state.windowHeight - 60}
              width={this.state.windowWidth}
              dataSource={_testDs}
              showRowNumber={true}
              showColumnNumber={true}
            />
          : <FileListView
              fileList={this.state.fileList}
              compHeight={this.state.windowHeight - 60}
              compWidth={this.state.windowWidth}
              switchPage={this.handleSwitch}
            />
        }
      </div>
    );
  }
}

export default MainFrame;
export { MainFrame };
