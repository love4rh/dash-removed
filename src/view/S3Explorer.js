import React from 'react';
import logo from '../assets/logo.svg';

import FileListView from './FileListView.js';
import DataGrid from '../grid/DataGrid.js';
import { DataSource, DataSource2 } from '../grid/DataSource.js';

import apiProxy from '../common/apiProxy.js';

import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Spinner,
    Overlay
} from '@blueprintjs/core';


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

  handleMenuClick = (type) => (ev) => {
    this.setState({ activeMenu: type });

    if (type === 'refresh') {
      this.actionReloadList();
    }
  }

  handleSwitch = (type, arg) => {
    if( 'grid' === type ) {
      this.actionGetData(arg);
    }
  }

  render() {
    const { windowHeight, windowWidth } = this.state;

    return (
      <div>
        <Navbar className="bp3-dark" >
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading style={{ paddingTop:'5px' }}><img alt="logo" src={logo} style={{ width:'32px', height:'32px' }} /></NavbarHeading>
            <NavbarHeading>S3 Explorer</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="refresh" text="Refresh" onClick={this.handleMenuClick('refresh')} />
            {this.state.pageType === 'grid' && (
              <Button className={Classes.MINIMAL} icon="document" text={this.state.dataName} />
            )}
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="cog" text="Setting" onClick={this.handleMenuClick('setting')} />
          </NavbarGroup>
        </Navbar>

        {this.state.loading && (
          <Overlay isOpen={this.state.loading}>
            <div className="waitingPopup" style={{ left:`${windowWidth / 2 - 100}px`, top:`${windowHeight / 2 - 100}px` }}><Spinner /></div>
          </Overlay>
        )}

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
