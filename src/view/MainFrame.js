import React, { Component } from 'react';
import logo from '../logo.svg';
// import css from './MainFrame.less';

import { Editor } from '../editor/Editor.js';

import {
  Container,
  Icon,
  Image,
  Menu,
  Loader,
  Dimmer,
} from 'semantic-ui-react';


class MainFrame extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,

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

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Menu.Item header name='Home' onClick={this.handleMenuClick}>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            S3 Explorer
          </Menu.Item>
        </Menu>

        <Container text style={{ height: '55px' }}>&nbsp;</Container>

        {this.state.loading ? (<Dimmer active inverted><Loader content='Loading' /></Dimmer>) : null}

        <Editor
          height={this.state.windowHeight - 60}
          width={this.state.windowWidth}
        />
      </div>
    );
  }
}

export default MainFrame;
export { MainFrame };
