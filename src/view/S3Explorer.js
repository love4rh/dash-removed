import React from 'react';
import logo from '../logo.svg';

import FileListView from './FileListView.js';
import DataGrid from '../grid/DataGrid.js';
import { DataSource, DataSource2 } from '../grid/DataSource.js';

import apiProxy from '../common/apiProxy.js';

import {
  Container,
  Icon,
  Image,
  Menu,
  Loader,
  Dimmer,
} from 'semantic-ui-react';


const _testDs = new DataSource({ title: 'TEST', columnCount: 15, rowCount: 1000, rowHeight: 32 });


class S3Explorer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeMenu: 'Home',
      fileList: [],
      loading: false,
      pageType: 'list', // list, grid
      dataName: null,

      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,

      dataSource: _testDs,
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

  actionReloadList = () => {
    this.setState({ loading:true });

    apiProxy.ls((res) => {
      console.log('api call success', res);
      if (res && res.data) {
        this.setState({pageType: 'list', fileList: res.data.list});
      }
    }, (err) => {
      console.log('api call error', err);
    }, () => {
      this.setState({ loading:false });
    });
  }

  actionGetData = ({ name, path, sampling }) => {
    this.setState({ loading:true });

    apiProxy.get({ name, path, sampling }, (res) => {
      if (res && res.data) {
        // console.log(res.data);
        this.setState({ pageType: 'grid', dataName: name,
          dataSource: new DataSource2({ title: name,
            getMore: (s, len, cb) => {
              apiProxy.getMore({ name, path, start:s, length:len }, (res) => {
                if (res && res.data) {
                  cb(res.data);
                }
              }, (err) => {
                console.log('api getMore error', err);
              }, () => {
                // this.setState({ loading:false });
              });
            },
            ...res.data
          })
        });
      }
    }, (err) => {
      console.log('api get error', err);
    }, () => {
      this.setState({ loading:false });
    });
  }

  handleMenuClick = (ev, data) => {
    // console.log(ev, data);
    this.setState({ activeMenu: data.name });

    if (data.name === 'refresh') {
      this.actionReloadList();
    }
  }

  handleSwitch = (type, arg) => {
    if( 'grid' === type ) {
      this.actionGetData(arg);
    }
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
          { this.state.pageType === 'grid'
            ? <Menu.Item name='dataName'>{this.state.dataName}</Menu.Item>
            : null
          }
          <Menu.Item name='setting' position='right' onClick={this.handleMenuClick}>
            <Icon name='setting' size='large' />
          </Menu.Item>
        </Menu>

        <Container text style={{ height: '55px' }}>&nbsp;</Container>

        { this.state.loading ? (<Dimmer active inverted><Loader content='Loading' /></Dimmer>) : null }

        { this.state.pageType === 'grid'
          ? <DataGrid
              height={this.state.windowHeight - 60}
              width={this.state.windowWidth}
              dataSource={this.state.dataSource}
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

export default S3Explorer;
export { S3Explorer };
