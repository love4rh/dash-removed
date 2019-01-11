import React, { Component } from 'react';
import logo from '../logo.svg';
import css from './MainFrame.less';

import FileListView from './FileListView.js';
import apiProxy from '../apiProxy.js';

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Loader,
  Dimmer,
} from 'semantic-ui-react';


class MainFrame extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fileList: [],
      activeMenu: 'Home',
      loading: false,
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  reload = () => {
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
      this.reload();
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
          <Menu.Item name='setting' position='right' onClick={this.handleMenuClick}>
            <Icon name='setting' size='large' />
          </Menu.Item>
        </Menu>

        <Container text style={{ height: '55px' }}>&nbsp;</Container>

        {this.state.loading ? (<Dimmer active inverted><Loader content='Loading' /></Dimmer>) : null}

        <FileListView fileList={this.state.fileList} />
      </div>
    );
  }
}

export default MainFrame;
export { MainFrame };
