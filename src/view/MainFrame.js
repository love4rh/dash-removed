import React, { Component } from 'react';
import logo from '../logo.svg';
// import css from './MainFrame.less';

import { ProjectEditor } from '../editor/ProjectEditor.js';

import apiProxy from '../common/apiProxy.js';
import {isvalid} from '../common/tool.js';

import { scriptSample } from '../mock/sampleProject.js';


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
      loading: true,

      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,

      projectList: []
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize);

    // this.loadScript('/', 'SegmentInfo.xml');

    const { projectList } = this.state;
    projectList.push(scriptSample);
    this.setState({ projectList: projectList, loading: false });

    // this.loadScript('/', 'scriptSample.xml');
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

  loadScript = (path, name) => {
    this.setState({ loading: true });

    apiProxy.getScript({ path, name },
      (res) => {
        const { projectList } = this.state;

        if( res && res.data && isvalid(res.data.script) ) {
          // console.log(JSON.stringify(res.data.script));
          projectList.push(res.data.script);
          this.setState({ projectList: projectList });
        }
      }, (err) => {
        console.log('api getScript error', err);
      }, () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { windowHeight, windowWidth, projectList } = this.state;

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

        <ProjectEditor
          height={windowHeight - 60}
          width={windowWidth}
          projectList={this.state.projectList}
        />
      </div>
    );
  }
}

export default MainFrame;
export { MainFrame };
